//! Promises:
//  * A placeholder for a value that will be computed in the future.
//  * An object that represents the eventual result of an asynchronous operation.
//
//! Experiment 1: Create a pending promise (resolved nor rejected).
//  * What will be printed to the console and in what order?

const p = new Promise((resolve, reject) => {
  // Do nothing
});

console.log(1, typeof p);
console.log(2, p);
