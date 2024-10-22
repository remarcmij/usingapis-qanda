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
  #handlers = [];

  constructor(executor) {
    const resolve = (value) => {
      if (this.#state === 'pending') {
        this.#state = 'fulfilled';
        this.value = value;
        this.#handlers.forEach((handler) => handler.onFulfilled(value));
      }
    };

    const reject = (value) => {
      if (this.#state === 'pending') {
        this.#state = 'rejected';
        this.value = value;
        this.#handlers.forEach((handler) => handler.onRejected(value));
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  #onFulFilledCallback(resolve, reject, onFulfilled) {
    try {
      if (!onFulfilled) {
        resolve(this.value);
        return;
      }
      const result = onFulfilled(this.value);
      if (result instanceof AsyncPromise) {
        result.then(resolve, reject);
      } else {
        resolve(result);
      }
    } catch (err) {
      reject(err);
    }
  }

  #onRejectedCallback(resolve, reject, onRejected) {
    try {
      if (!onRejected) {
        reject(this.value);
        return;
      }
      const result = onRejected(this.value);
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
        if (this.#state === 'pending') {
          this.#handlers.push({
            onFulfilled: () =>
              this.#onFulFilledCallback(resolve, reject, onFulfilled),

            onRejected: () =>
              this.#onRejectedCallback(resolve, reject, onRejected),
          });
        }

        if (this.#state === 'fulfilled') {
          this.#onFulFilledCallback(resolve, reject, onFulfilled);
        }

        if (this.#state === 'rejected') {
          this.#onRejectedCallback(resolve, reject, onRejected);
        }
      });
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onFinally) {
    return new Promise((resolve, reject) => {
      queueMicrotask(() => {
        try {
          const result = onFinally();
          if (result instanceof AsyncPromise) {
            result.then(resolve, reject);
          } else if (this.#state === 'fulfilled') {
            resolve(this.value);
          } else if (this.#state === 'rejected') {
            reject(this.value);
          }
        } catch (err) {
          reject(err);
        }
      });
    });
  }
}
