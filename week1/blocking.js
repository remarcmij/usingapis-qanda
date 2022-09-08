let startTime;

function timeoutNonBlocking(time, callback) {
  setTimeout(() => callback(), time);
}

function timeoutBlocking(time, callback) {
  const startTime = Date.now();
  while (Date.now() < startTime + time) {
    // do nothing, just loop like mad
  }
  callback();
}

function doAsyncThings() {
  let count = 20;
  const intervalId = setInterval(() => {
    console.log(Date.now() - startTime, 'Doing async things...');
    count -= 1;
    if (count === 0) {
      clearInterval(intervalId);
    }
  }, 100);
}

function main() {
  startTime = Date.now();

  console.log(Date.now() - startTime, 'Main start');

  doAsyncThings();

  timeoutBlocking(1000, () =>
    console.log(Date.now() - startTime, 'Hello world!')
  );

  console.log(Date.now() - startTime, 'Main exit');
}

main();
