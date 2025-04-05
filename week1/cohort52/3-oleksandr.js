function cancellableWorker(secs) {
  let timerId = null;

  const promise = new Promise((resolve) => {
    timerId = setTimeout(() => {
      console.log('worker resolves', secs);
      resolve(secs);
      timerId = null;
    }, secs * 1000);
  });

  const cancelFn = () => {
    if (!timerId) {
      return;
    }
    console.log('worker cancelled', secs);
    clearTimeout(timerId);
  };

  return [promise, cancelFn];
}

function watchdogTimer(secs) {
  let timerId = null;

  const promise = new Promise((resolve, reject) => {
    timerId = setTimeout(() => {
      reject();
      timerId = null;
    }, secs * 1000);
  });

  const cancelFn = () => {
    if (!timerId) {
      return;
    }
    console.log('watchdog cancelled');
    clearTimeout(timerId);
  };

  return [promise, cancelFn];
}

function main() {
  const workers = [];

  // Create 5 promises
  for (let i = 1; i <= 5; i++) {
    const [promise, cancelFn] = cancellableWorker(i);
    const worker = { promise, cancelFn };
    promise
      .then((result) => {
        worker.result = result;
      })
      .catch((error) => {
        worker.error = error;
      });
    workers.push(worker);
  }

  const [watchdogPromise, watchdogCancel] = watchdogTimer(6);

  Promise.all(workers.map((worker) => worker.promise)).then((results) => {
    watchdogCancel();
    console.log('normal results', results);
  });

  watchdogPromise.catch(() => {
    workers.forEach((worker) => worker.cancelFn());
    const results = workers.map((worker) => worker.result);
    console.log('watchdog results', results);
  });
}

main();
