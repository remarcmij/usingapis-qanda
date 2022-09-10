function fakeFetch(url) {
  console.log(`Starting fetch for ${url}`);
  const responseTimeInMilliSecs = Math.random() * 1000;
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Here is your data'), responseTimeInMilliSecs);
  });
}

const WATCHDOG_MS = 500;

function main() {
  // Set up watchdog timer
  let timedOut = false;
  setTimeout(() => {
    timedOut = true;
  }, WATCHDOG_MS);

  console.time('fetch');

  fakeFetch('http://hackYourFuture.net').then((response) => {
    console.timeEnd('fetch');
    if (timedOut) {
      console.log('Fetch timed out');
      return;
    }
    console.log(`Response: ${response}`);
  });
}

main();
