export class SyncPromise {
  #value;
  #state = 'pending';

  static resolve(value) {
    return new SyncPromise((resolve, reject) => resolve(value));
  }

  static reject(value) {
    return new SyncPromise((resolve, reject) => reject(value));
  }

  constructor(executor) {
    const resolve = (value) => {
      if (this.#state !== 'pending') return;
      this.#state = 'fulfilled';
      this.value = value;
    };

    const reject = (value) => {
      if (this.#state !== 'pending') return;
      this.#state = 'rejected';
      this.#value = value;
    };

    if (executor) {
      executor(resolve, reject);
    }
  }

  then(onResolved, onRejected) {
    if (onResolved && this.#state === 'fulfilled') {
      const newVal = onResolved(this.value);
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

  finally(onFinally) {
    onFinally();
    return this;
  }
}
