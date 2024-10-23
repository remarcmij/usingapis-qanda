// Adapted from: https://medium.com/swlh/implement-a-simple-promise-in-javascript-20c9705f197a

// ! WARNING: headache ahead!

const DEBUG = true;

export class AsyncPromise {
  static resolve(value) {
    return new AsyncPromise((resolve, reject) => resolve(value));
  }

  static reject(value) {
    return new AsyncPromise((resolve, reject) => reject(value));
  }

  static #count = 0;

  #state = 'pending';
  #value = undefined;
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
        this.#fulfilledHandlers.forEach((handler) => handler());
      }
    };

    const reject = (value) => {
      if (this.#state === 'pending') {
        this.#state = 'rejected';
        this.#value = value;
        this.#rejectedHandlers.forEach((handler) => handler());
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }

    DEBUG && console.log(`[promise #${this.#id}] ${this.#state}`);
  }

  #fulfilledHandler(resolve, reject, onFulfilled) {
    queueMicrotask(() => {
      DEBUG && console.log(`\n[microtask #${this.#id} start]`);

      try {
        if (!onFulfilled) {
          resolve(this.#value);
        } else {
          const result = onFulfilled(this.#value);

          if (result instanceof AsyncPromise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        }
      } catch (err) {
        reject(err);
      }

      DEBUG && console.log(`[microtask #${this.#id} exit]`);
    });
  }

  #rejectedHandler(resolve, reject, onRejected) {
    queueMicrotask(() => {
      DEBUG && console.log(`\n[microtask #${this.#id} start]`);
      try {
        if (!onRejected) {
          reject(this.#value);
        } else {
          const result = onRejected(this.#value);

          if (result instanceof AsyncPromise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        }
      } catch (err) {
        reject(err);
      }

      DEBUG && console.log(`[microtask #${this.#id} exit]`);
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
