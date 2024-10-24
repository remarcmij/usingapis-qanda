import { createLogger } from '../helpers/helpers.js';

const log = createLogger(true);

// Loosely based on: https://medium.com/swlh/implement-a-simple-promise-in-javascript-20c9705f197a

export class AsyncPromise {
  static resolve(value) {
    if (value instanceof AsyncPromise) {
      return value;
    }
    return new AsyncPromise((resolve, reject) => resolve(value));
  }

  static reject(value) {
    return new AsyncPromise((resolve, reject) => reject(value));
  }

  // Promise.all() adapted from https://medium.com/@copperwall/implementing-promise-all-575a07db509a
  static all(promises) {
    return new AsyncPromise((resolve, reject) => {
      let results = [];
      let completed = 0;

      promises.forEach((promise, index) => {
        AsyncPromise.resolve(promise)
          .then((result) => {
            results[index] = result;
            completed += 1;

            if (completed == promises.length) {
              resolve(results);
            }
          })
          .catch((err) => reject(err));
      });
    });
  }

  static #count = 0;

  #state = 'pending';
  #value = undefined;
  #reason = undefined;
  #rejectedHandlers = [];
  #fulfilledHandlers = [];
  #id = 0;

  constructor(executor) {
    // Assign a unique id to each promise
    this.#id = ++AsyncPromise.#count;

    const resolve = (value) => {
      if (this.#state === 'pending') {
        this.#state = 'fulfilled';
        this.#value = value;
        log(`[promise#${this.#id} fulfilled]`);
        this.#fulfilledHandlers.forEach((handler) => handler());
      }
    };

    const reject = (reason) => {
      if (this.#state === 'pending') {
        this.#state = 'rejected';
        this.#reason = reason;
        log(`[promise#${this.#id} rejected]`);
        this.#rejectedHandlers.forEach((handler) => handler());
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }

    if (this.#state === 'pending') {
      log(`[promise#${this.#id} pending]`);
    }
  }

  #fulfilledHandler(resolve, reject, onFulfilled) {
    log(`[enqueue microtask#${this.#id}]`);
    queueMicrotask(() => {
      log(`\n[microtask#${this.#id} start]`);

      try {
        if (typeof onFulfilled === 'function') {
          const result = onFulfilled(this.#value);
          if (isThenable(result)) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } else {
          resolve(this.#value);
        }
      } catch (err) {
        reject(err);
      }

      log(`[microtask#${this.#id} exit]`);
    });
  }

  #rejectedHandler(resolve, reject, onRejected) {
    log(`[enqueue microtask#${this.#id}]`);
    queueMicrotask(() => {
      log(`\n[microtask#${this.#id} start]`);
      try {
        if (typeof onRejected === 'function') {
          const result = onRejected(this.#reason);
          if (isThenable(result)) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } else {
          reject(this.#reason);
        }
      } catch (err) {
        reject(err);
      }

      log(`[microtask#${this.#id} exit]`);
    });
  }

  then(onFulfilled, onRejected) {
    return new AsyncPromise((resolve, reject) => {
      if (this.#state === 'fulfilled') {
        this.#fulfilledHandler(resolve, reject, onFulfilled);
      } else if (this.#state === 'rejected') {
        this.#rejectedHandler(resolve, reject, onRejected);
      } else {
        // pending
        this.#fulfilledHandlers.push(() =>
          this.#fulfilledHandler(resolve, reject, onFulfilled)
        );
        this.#rejectedHandlers.push(() =>
          this.#rejectedHandler(resolve, reject, onRejected)
        );
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

// check for promise or promise-like result
export const isThenable = (result) =>
  ['object', 'function'].includes(typeof result) &&
  typeof result.then === 'function';
