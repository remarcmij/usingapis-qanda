export class MyPromise {
  #value;
  #state = 'pending';

  static resolve(value) {
    return new MyPromise((resolve, reject) => resolve(value));
  }

  static reject(value) {
    return new MyPromise((resolve, reject) => reject(value));
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
      if (newVal instanceof MyPromise) {
        return newVal;
      }
      return MyPromise.resolve(newVal);
    }

    if (onRejected && this.#state === 'rejected') {
      const newVal = onRejected(this.#value);
      if (newVal instanceof MyPromise) {
        return newVal;
      }
      return MyPromise.resolve(newVal);
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
