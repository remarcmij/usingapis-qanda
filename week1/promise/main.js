// import { MyPromise as Promise } from './my-promise.js';

console.log('starting');

setTimeout(() => {
  console.log('timeout 1');
}, 0);

setTimeout(() => {
  console.log('timeout 2');
}, 0);

Promise.resolve()
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
