//! Experiment 1: Synchronous code with async timeouts
//  * What will be logged to the console and in what order?
//  * How many tasks does the JavaScript engine run (to completion)?

console.log('starting');

setTimeout(() => {
  console.log('timeout 1');
}, 0);

setTimeout(() => {
  console.log('timeout 2');
}, 0);

console.log('ending');
