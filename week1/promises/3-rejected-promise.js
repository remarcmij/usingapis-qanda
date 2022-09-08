//! Experiment 3: Creating and consuming a rejected promise
//  * What will be printed to the console and in what order?

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Something went wrong...'));
  }, 0);
});

console.log(1, p);

p.then((result) => {
  console.log(2, result);
  console.log(3, p);
}).catch((err) => {
  console.log(4, p);
  console.log(5, err.message);
});
