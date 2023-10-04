//! What will be printed to the console and in what order
'use strict';

function writeToConsole(message) {
  console.log(message);
}

writeToConsole('starting');

setTimeout(function timeout_1_cb() {
  writeToConsole('timeout 1');
}, 1000);

setTimeout(function timeout_2_cb() {
  writeToConsole('timeout 2');
}, 2000);

const p = new Promise((resolve, reject) => {
  resolve();
});

p.then(function then_1_cb() {
  writeToConsole('then 1');
}).then(function then_2_cb() {
  writeToConsole('then 2');
});

writeToConsole('ending');
