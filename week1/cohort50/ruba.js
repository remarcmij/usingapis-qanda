// import { AsyncPromise as Promise } from '../lib/async-promise.js';

function createPromise(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, value * 10);
  });
}

function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolvedCount = 0;
    for (const promise of promises) {
      promise
        .then((value) => {
          results.push(value);
          resolvedCount++;
          if (resolvedCount === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
          return;
        });
    }
  });
}

function main() {
  console.log('<<< main starting >>>');
  const promises = [createPromise(10), createPromise(5), createPromise(12)];
  PromiseAll(promises)
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.error(error);
    });
  console.log('<<< main ending >>>');
}

main();
