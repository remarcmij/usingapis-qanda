// Adapted from: https://medium.com/swlh/implement-a-simple-promise-in-javascript-20c9705f197a

// ! WARNING: headache ahead!

export class AsyncPromise {
  static resolve(value) {
    return new AsyncPromise((resolve, reject) => resolve(value));
  }

  static reject(value) {
    return new AsyncPromise((resolve, reject) => reject(value));
  }

  #state = 'pending';
  #value = undefined;
  #handlers = [];

  constructor(executor) {
    const resolve = (value) => {
      if (this.#state === 'pending') {
        this.#state = 'fulfilled';
        this.#value = value;
        this.#handlers.forEach((handler) => handler.onFulfilled(value));
      }
    };

    const reject = (value) => {
      if (this.#state === 'pending') {
        this.#state = 'rejected';
        this.#value = value;
        this.#handlers.forEach((handler) => handler.onRejected(value));
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
    return new AsyncPromise((resolve, reject) => {
      queueMicrotask(() => {
        if (this.#state === 'fulfilled') {
          this.#fulfilledHandler(resolve, reject, onFulfilled);
        } else if (this.#state === 'rejected') {
          this.#rejectedHandler(resolve, reject, onRejected);
        } else {
          // pending
          this.#handlers.push({
            onFulfilled: () =>
              this.#fulfilledHandler(resolve, reject, onFulfilled),
            onRejected: () =>
              this.#rejectedHandler(resolve, reject, onRejected),
          });
        }
      });
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onFinally) {
    return new AsyncPromise((resolve, reject) => {
      queueMicrotask(() => {
        try {
          const result = onFinally();
          if (result instanceof AsyncPromise) {
            result.then(resolve, reject);
          } else if (this.#state === 'fulfilled') {
            resolve(this.#value);
          } else if (this.#state === 'rejected') {
            reject(this.#value);
          }
        } catch (err) {
          reject(err);
        }
      });
    });
  }
}
