import { AsyncPromise as Promise } from '../../async-promise/async-promise.js';

let timerCount = 0;

function writeToConsole(message) {
  console.log(message);
}

function timer(callback, delay) {
  timerCount += 1;
  console.log(`[timer#${timerCount} created]`);
  setTimeout(() => {
    console.log(`[timer#${timerCount} start]`);
    callback();
    console.log(`[timer#${timerCount} exit]`);
  }, delay);
}

function main() {
  writeToConsole('<<< main starting >>>');

  timer(function timer_1_callback() {
    writeToConsole('>>> timer#1 callback');
  }, 1000);

  timer(function timer_2_callback() {
    writeToConsole('>>> timer#2 callback');
  }, 2000);

  Promise.resolve() /* promise#1 */
    .then(function then_1_callback() {
      writeToConsole('>>> then#1 callback');
    }) /* promise#2 */
    .then(function then_2_callback() {
      writeToConsole('>>> then#2 callback');
    }) /* promise#3 */;

  writeToConsole('<<< main ending >>>');
}

main();
