function fakeFetch(url) {
  console.log(`Starting fetch for ${url}`);
  const responseTimeInMilliSecs = Math.random() * 1000;

  console.time('fetch');
  return new Promise((resolve) => {
    setTimeout(() => {
      console.timeEnd('fetch');
      resolve('Here is your data');
    }, responseTimeInMilliSecs);
  });
}

const WATCHDOG_MS = 500;

function watchDog(delayInMillisecs) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Fetch timed out'));
    }, delayInMillisecs);
  });
}

function main() {
  const fetchPromise = fakeFetch('http://hackYourFuture.net');

  const watchDogPromise = watchDog(WATCHDOG_MS);

  Promise.race([fetchPromise, watchDogPromise])
    .then((response) => {
      console.log(`Response: ${response}`);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

main();
