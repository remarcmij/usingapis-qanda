import { beep } from '../../week1/lib/beep.js';

function setTimeoutBlocking(callbackFn, time) {
  const endTime = Date.now() + time;
  while (Date.now() < endTime) {
    // do nothing
  }
  callbackFn();
}

const setTimeoutNonBlocking = setTimeout;

let setTimeoutFn;

let isRunning = false;

async function timer(count) {
  while (true) {
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

    await new Promise((resolve) => setTimeoutFn(resolve, 1000));
    count -= 1;
  }
}

async function startTimer() {
  if (isRunning) {
    return;
  }

  setTimeoutFn = document.querySelector('#blocking').checked
    ? setTimeoutBlocking
    : setTimeoutNonBlocking;

  isRunning = true;
  await timer(10);
  console.log('<<< startTimer has exited >>>');
}

function stopTimer() {
  isRunning = false;
}

document.querySelector('#start').addEventListener('click', startTimer);
document.querySelector('#stop').addEventListener('click', stopTimer);
