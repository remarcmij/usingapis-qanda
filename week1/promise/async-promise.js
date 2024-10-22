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
    this.#id = ++AsyncPromise.#count;
    DEBUG && console.log(`[constructor #${this.#id}]`);

    const resolve = (value) => {
      if (this.#state === 'pending') {
        DEBUG && console.log(`[resolve #${this.#id}]`);
        this.#state = 'fulfilled';
        this.#value = value;
        this.#fulfilledHandlers.forEach((handler) => handler());
      }
    };

    const reject = (value) => {
      if (this.#state === 'pending') {
        DEBUG && console.log(`[reject #${this.#id}]`);
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
  }

  #fulfilledHandler(resolve, reject, onFulfilled) {
    try {
      if (!onFulfilled) {
        resolve(this.#value);
        return;
      }

      DEBUG && console.log(`[handle fulfilled #${this.#id}]`);
      const result = onFulfilled(this.#value);

      if (result instanceof AsyncPromise) {
        result.then(resolve, reject);
      } else {
        resolve(result);
      }
    } catch (err) {
      reject(err);
    }
  }

  #rejectedHandler(resolve, reject, onRejected) {
    try {
      if (!onRejected) {
        reject(this.#value);
        return;
      }

      DEBUG && console.log(`[handle rejected #${this.#id}]`);
      const result = onRejected(this.#value);

      if (result instanceof AsyncPromise) {
        result.then(resolve, reject);
      } else {
        resolve(result);
      }
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    DEBUG && console.log(`[then #${this.#id}]`);
    return new AsyncPromise((resolve, reject) => {
      queueMicrotask(() => {
        DEBUG && console.log(`[microtask #${this.#id} start ${this.#state}]`);
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
        DEBUG && console.log(`[microtask #${this.#id} exit]`);
      });
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}
