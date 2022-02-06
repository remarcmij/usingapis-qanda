// ! What will be printed to the console and in what order

console.log('starting');

setTimeout(function timeout_1() {
  console.log('timeout 1');
}, 0);

setTimeout(function timeout_2() {
  console.log('timeout 2');
}, 0);

Promise.resolve() // try reject() too
  .then(function then_1() {
    console.log('then 1');
  })
  .then(function then_2() {
    console.log('then 2');
  });

console.log('ending');
