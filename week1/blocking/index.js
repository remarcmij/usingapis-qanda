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

function doTasks(taskCount) {
  const doTask = (taskNum) => {
    if (taskNum > taskCount || !isRunning) {
      isRunning = false;
      return;
    }

    setTimeoutFn(() => {
      console.log(`task#${taskNum}`);
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
