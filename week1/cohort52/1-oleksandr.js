function worker(secs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`worker ${secs} resolves`);
      resolve(secs);
    }, secs * 1000);
  });
}

function main() {
  const workerPromises = [];

  for (let i = 1; i <= 5; i++) {
    workerPromises.push(worker(i));
  }

  Promise.all(workerPromises).then((workerResults) => {
    console.log('workerResults', workerResults);
  });
}

main();
