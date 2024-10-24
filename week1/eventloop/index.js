// import { AsyncPromise as Promise } from './promises/async-promise.js';

let timerCount = 0;

function writeToConsole(message) {
  console.log(message);
}

function myTimeout(cb, delay) {
  timerCount += 1;
  console.log(`[timer#${timerCount} created]`);
  setTimeout(() => {
    console.log(`[timer#${timerCount} start]`);
    cb();
    console.log(`[timer#${timerCount} exit]`);
  }, delay);
}

function main() {
  writeToConsole('<<< main starting >>>');

  myTimeout(function timeout_1_cb() {
    writeToConsole('>>> timer#1');
  }, 1000);

  myTimeout(function timeout_2_cb() {
    writeToConsole('>>> timer#2');
  }, 2000);

  Promise.resolve()
    .then(function then_1_cb() {
      writeToConsole('>>> then#1');
    })
    .then(function then_2_cb() {
      writeToConsole('>>> then#2');
    });

  writeToConsole('<<< main ending >>>');
}

main();
