function fakeFetch(url) {
  console.log(`Starting fetch for ${url}`);
  const responseTime = Math.random() * 1000;
  console.log(`Response will take ${Math.round(responseTime)}ms.`);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Here is your data');
    }, responseTime);
  });
}

function watchDog(timeout) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Fetch timed out'));
    }, timeout);
  });
}

const WATCHDOG_TIMEOUT_MS = 500;

function main() {
  const fetchPromise = fakeFetch('http://hackYourFuture.net');

  const watchDogPromise = watchDog(WATCHDOG_TIMEOUT_MS);

  Promise.race([fetchPromise, watchDogPromise])
    .then((response) => {
      console.log(`Response: ${response}`);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

main();

/* 
  ! For a better way using `fetch` and `AbortController` see:
  ! https://javascript.info/fetch-abort
*/
