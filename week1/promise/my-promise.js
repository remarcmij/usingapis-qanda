class MyPromise {
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

console.log('starting');

setTimeout(() => {
  console.log('timeout 1');
}, 0);

setTimeout(() => {
  console.log('timeout 2');
}, 0);

MyPromise.resolve()
  .then(() => {
    console.log('then 1');
  })
  .then(() => {
    console.log('then 2');
  })
  .catch(() => {
    console.log('catch 1');
  })
  .catch(() => {
    console.log('catch 2');
  })
  .then(() => {
    console.log('then 3');
  })
  .finally(() => {
    console.log('finally');
  });

console.log('ending');
