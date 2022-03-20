function onTimeoutNonBlocking(time, callback) {
  setTimeout(callback, time);
}

function onTimeoutBlocking(time, callback) {
  const startTime = Date.now();
  while (Date.now() < startTime + time) {
    // do nothing, just loop
  }
  callback();
}

function doOtherThings() {
  let count = 20;
  const intervalId = setInterval(() => {
    console.log('==> Doing other things...');
    count -= 1;
    if (count == 0) {
      clearInterval(intervalId);
    }
  }, 100);
}

doOtherThings();

console.log('Before');
onTimeoutNonBlocking(2000, () => console.log('Hello world!'));
console.log('After');
