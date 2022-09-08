//! Experiment 2: Synchronous code with async NON-ZERO timeouts
//  * What will be logged to the console and in what order?
//  * How many tasks does the JavaScript engine run (to completion)?

console.log('starting');

setTimeout(() => {
  console.log('timeout 1');
}, 2000);

setTimeout(() => {
  console.log('timeout 2');
}, 4000);

console.log('ending');
