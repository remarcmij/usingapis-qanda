// ! What will be printed to the console and in what order

function writeToConsole(message) {
  console.log(message);
}

writeToConsole('starting');

setTimeout(function timeout_1() {
  writeToConsole('timeout 1');
}, 0);

setTimeout(function timeout_2() {
  writeToConsole('timeout 2');
}, 0);

Promise.resolve() // try reject() too
  .then(function then_1() {
    writeToConsole('then 1');
  })
  .then(function then_2() {
    writeToConsole('then 2');
  });

writeToConsole('ending');
