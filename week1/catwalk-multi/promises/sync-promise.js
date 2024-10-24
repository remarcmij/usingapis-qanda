export class SyncPromise {
  #state = 'pending';
  #value = undefined;

  static resolve(value) {
    return new SyncPromise((resolve, reject) => resolve(value));
  }

  static reject(value) {
    return new SyncPromise((resolve, reject) => reject(value));
  }

  constructor(executor) {
    const resolve = (value) => {
      if (this.#state === 'pending') {
        this.#state = 'fulfilled';
        this.#value = value;
      }
    };

    const reject = (value) => {
      if (this.#state === 'pending') {
        this.#state = 'rejected';
        this.#value = value;
      }
    };

    executor(resolve, reject);
  }

  then(onResolved, onRejected) {
    if (onResolved && this.#state === 'fulfilled') {
      const newVal = onResolved(this.#value);
      if (newVal instanceof SyncPromise) {
        return newVal;
      }
      return SyncPromise.resolve(newVal);
    }

    if (onRejected && this.#state === 'rejected') {
      const newVal = onRejected(this.#value);
      if (newVal instanceof SyncPromise) {
        return newVal;
      }
      return SyncPromise.resolve(newVal);
    }

    return this;
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}
