import logTime from '../lib/logTime.js';

function setTimeoutBlocking(callbackFn, time) {
  const endTime = Date.now() + time;
  while (Date.now() < endTime) {
    // do nothing, just loop until time has passed
  }
  callbackFn();
}

const BLOCKING = false;
const setTimeoutFn = BLOCKING ? setTimeoutBlocking : setTimeout;

let isRunning = false;

function doTasks(maxTasks) {
  const doTask = (taskNum) => {
    if (taskNum > maxTasks || !isRunning) {
      isRunning = false;
      return;
    }

    setTimeoutFn(() => {
      logTime(`task#${taskNum}`);
      doTask(taskNum + 1);
    }, 200);
  };

  doTask(1);
}

function start() {
  if (isRunning) {
    return;
  }
  console.log('<<< main start >>>');
  isRunning = true;
  doTasks(20);
  console.log('<<< main exit >>>');
}

function stop() {
  isRunning = false;
}

document.querySelector('#start').addEventListener('click', start);
document.querySelector('#stop').addEventListener('click', stop);
