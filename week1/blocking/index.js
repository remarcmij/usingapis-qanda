import { beep } from '../lib/beep.js';

function setTimeoutBlocking(callbackFn, time) {
  const endTime = Date.now() + time;
  let count = 0;
  while (Date.now() < endTime) {
    count++;
    // do nothing
  }
  callbackFn();
  console.log('count', count);
}

let setTimeoutFn;

let isRunning = false;

function timer(count) {
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
    timer(count - 1);
  }, 1000);
}

function startTimer() {
  console.log('startTimer called');
  if (isRunning) {
    return;
  }

  setTimeoutFn = document.querySelector('#blocking').checked
    ? setTimeoutBlocking
    : setTimeout;

  isRunning = true;
  timer(10);
  console.log('<<< startTimer has exited >>>');
}

function stopTimer() {
  console.log('stopTimer called');
  isRunning = false;
}

document.querySelector('#start').addEventListener('click', startTimer);
document.querySelector('#stop').addEventListener('click', stopTimer);
