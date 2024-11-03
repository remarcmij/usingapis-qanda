import { AsyncPromise as Promise } from '../lib/async-promise.js';
import { setTimeoutWrapper as setTimeout } from './setTimeoutWrapper.js';

function logToConsole(message) {
  console.log(message);
}

function main() {
  logToConsole('<<< main starting >>>');

  setTimeout(function timeout1() {
    logToConsole('>>> timeout#1');
  }, 0);

  setTimeout(function timeout2() {
    logToConsole('>>> timeout#2');
  }, 0);

  Promise.resolve() /* promise#1 */
    .then(function onFulfilled1() /* then#1 */ {
      logToConsole('>>> then#1');
    }) /* promise#2 */
    .then(function onFulfilled2() /* then#2 */ {
      logToConsole('>>> then#2');
    }) /* promise#3 */;

  logToConsole('<<< main ending >>>');
}

main();
