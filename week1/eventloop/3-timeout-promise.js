//! Experiment 3: Adding a resolved promise
//  * What will be logged to the console and in what order?
//  * Explanation?

console.log('starting');

console.log('setting up timer 1');
setTimeout(() => {
  console.log('timeout 1');
}, 0);

console.log('setting up timer 2');
setTimeout(() => {
  console.log('timeout 2');
}, 0);

// Create a new promise and resolve it immediately
new Promise((resolve, reject) => {
  resolve();
})
  .then(() => {
    console.log('then 1');

    console.log('setting up timer 3');
    setTimeout(() => {
      console.log('timeout 3');
    }, 0);
  })
  .catch(() => {
    console.log('catch 1');
  });

console.log('ending');
