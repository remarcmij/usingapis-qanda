function worker(secs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('worker resolves', secs);
      resolve(secs);
    }, secs * 1000);
  });
}

function watchdogTimer(secs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('timeout'));
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

  const watchdogPromise = watchdogTimer(3);

  Promise.race([allWorkers, watchdogPromise])
    .then((workerResults) => {
      console.log('workerResults', workerResults);
    })
    .catch((watchdogError) => {
      console.log('watchdogError', watchdogError.message);
    });
}

main();
