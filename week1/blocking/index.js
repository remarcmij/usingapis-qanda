import { beep } from '../lib/beep.js';

function setTimeoutBlocking(callbackFn, time) {
  const endTime = Date.now() + time;
  while (Date.now() < endTime) {
    // do nothing
  }
  callbackFn();
}

const setTimeoutNonBlocking = setTimeout;

const BLOCKING = false;
const setTimeoutFn = BLOCKING ? setTimeoutBlocking : setTimeoutNonBlocking;

let isRunning = false;

function countDown(count) {
  if (!isRunning) {
    return;
  }

  console.log(count);
  document.querySelector('#counter').textContent = count;

  if (count === 0) {
    beep();
    isRunning = false;
    return;
  }

  setTimeoutFn(() => {
    countDown(count - 1);
  }, 1000);
}

function start() {
  if (isRunning) {
    return;
  }
  isRunning = true;
  countDown(10);
  console.log('<<< start() exit >>>');
}

function stop() {
  isRunning = false;
}

document.querySelector('#start').addEventListener('click', start);
document.querySelector('#stop').addEventListener('click', stop);
