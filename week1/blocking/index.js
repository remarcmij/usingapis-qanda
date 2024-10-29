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

function runCounter(maxCount) {
  const nextCount = (count) => {
    if (count > maxCount || !isRunning) {
      isRunning = false;
      return;
    }

    setTimeoutFn(() => {
      console.log(count);
      document.querySelector('#counter').textContent = count;
      nextCount(count + 1);
    }, 200);
  };

  nextCount(1);
}

function start() {
  if (isRunning) {
    return;
  }
  isRunning = true;
  runCounter(20);
  console.log('<<< start exit >>>');
}

function stop() {
  isRunning = false;
}

document.querySelector('#start').addEventListener('click', start);
document.querySelector('#stop').addEventListener('click', stop);
