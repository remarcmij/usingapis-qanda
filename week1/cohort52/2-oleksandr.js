const WATCHDOG_TIMEOUT_SECS = 6;

function worker(secs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`worker ${secs} resolves`);
      resolve(secs);
    }, secs * 1000);
  });
}

function watchdogTimer(secs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('watchdog fires');
      reject();
    }, secs * 1000);
  });
}

function main() {
  const workerPromises = [];

  // Create 5 promises
  for (let i = 1; i <= 5; i++) {
    workerPromises.push(worker(i));
  }

  const allWorkers = Promise.all(workerPromises);

  const watchdogPromise = watchdogTimer(WATCHDOG_TIMEOUT_SECS);

  Promise.race([allWorkers, watchdogPromise])
    .then((workerResults) => {
      console.log('workerResults', workerResults);
    })
    .catch((watchdogError) => {
      console.log('watchdog timeout');
    });
}

main();
