import logTime from './helpers/logTime.js';

function setTimeoutSync(callbackFn, time) {
  const endTime = Date.now() + time;
  while (Date.now() < endTime) {
    console.log('looping...');
    // do nothing, just loop until time has passed
  }
  callbackFn();
}

// const setTimeoutFn = setTimeout;
const setTimeoutFn = setTimeoutSync;

setTimeout(() => logTime('real timeout'), 1000);

function doTasks(count) {
  if (count <= 0) {
    return;
  }

  setTimeoutFn(() => {
    logTime(`doing task: ${count}`);
    doTasks(count - 1);
  }, 100);
}

function main() {
  logTime('main() start');

  doTasks(20);

  logTime('main() exit');
}

main();
