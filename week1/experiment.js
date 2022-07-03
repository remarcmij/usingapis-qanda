console.log('starting');

setTimeout(() => {
  console.log('timeout 1');
}, 0);

setTimeout(() => {
  console.log('timeout 2');
}, 0);

// Create a rejected promise
Promise.reject()
  .then((result) => {
    console.log('then 1');
    return undefined;
    // return Promise.resolve(undefined);
  })
  .then(() => {
    console.log('then 2');
  })
  .catch(() => {
    console.log('catch 1');
    // return Promise.resolve();
    return Promise.reject();
  })
  .catch(() => {
    console.log('catch 2');
    return Promise.reject();
  })
  .then((result) => {
    console.log('then 3', result);
  })
  .finally(() => {
    console.log('finally');
  });

console.log('ending');
