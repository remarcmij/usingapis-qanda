//! What will be printed to the console and in what order
'use strict';

function writeToConsole(message) {
  console.log(message);
}

writeToConsole('1 starting');

setTimeout(function timeout_1_cb() {
  writeToConsole('2 timeout_1_cb');
}, 1000);

setTimeout(function timeout_2_cb() {
  writeToConsole('3 timeout_2_cb');
}, 2000);

const p = new Promise((resolve, reject) => {
  resolve();
});

p.then(function then_1_cb() {
  writeToConsole('4 then_1_cb');
}).then(function then_2_cb() {
  writeToConsole('5 then_2_cb');
});

writeToConsole('6 ending');
