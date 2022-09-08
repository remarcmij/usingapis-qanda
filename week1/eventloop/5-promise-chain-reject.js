//! Experiment 5: As previous example, but now for a rejected promise.
// * What will be logged to the console and in what order?
// * Explanation?

console.log('starting');

setTimeout(() => {
  console.log('timeout 1');
}, 0);

setTimeout(() => {
  console.log('timeout 2');
}, 0);

// Create a rejected promise
Promise.reject()
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
