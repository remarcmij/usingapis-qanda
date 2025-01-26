async function fakeFetch() {
  // Simulate rolling a die with a promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        resolve({ cohort: 51 });
      } else {
        reject(new Error('fetch failed'));
      }
    }, 1000);
  });
}

function fetchData(retries = 3) {
  return fakeFetch().catch((error) => {
    if (retries === 0) {
      return Promise.reject(error);
    }
    console.log(`Retrying... (${retries} attempts left)`);
    return fetchData(retries - 1);
  });
}

fetchData()
  .then((value) => console.log('Data', value))
  .catch((error) => console.error(`Error: ${error.message}`));
