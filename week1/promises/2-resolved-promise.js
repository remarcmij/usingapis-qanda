//! Experiment 2: Creating and consuming a resolved promise.
//  * What will be printed to the console and in what order?

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(42);
  }, 0);
});

console.log(1, p);

p.then((result) => {
  console.log(2, result);
  console.log(3, p);
}).catch((err) => {
  console.log(4, err.message);
});
