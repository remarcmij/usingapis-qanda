async function fakeFetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        resolve({ cohort: 51 });
      } else {
        reject(new Error('fetch failed'));
      }
    }, 1000);
  });
}

function fetchData(retries = 3) {
  console.log('fetching...');
  return fakeFetch().catch((error) => {
    if (retries === 0) {
      return Promise.reject(error);
    }
    console.log(`retrying... (${retries} attempts left)`);
    return fetchData(retries - 1);
  });
}

fetchData()
  .then((value) => console.log('data', value))
  .catch((error) => console.error(`error: ${error.message}`));
