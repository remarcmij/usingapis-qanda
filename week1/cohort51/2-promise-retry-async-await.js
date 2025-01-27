function fakeFetch() {
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

async function fetchData(retries = 3) {
  let error;
  while (retries >= 0) {
    try {
      console.log('fetching...');
      return await fakeFetch();
    } catch (err) {
      error = err;
      console.log(`retrying... (${retries} attempts left)`);
      retries--;
    }
  }
  throw error;
}

try {
  const value = await fetchData();
  console.log('data', value);
} catch (error) {
  console.error(`error: ${error.message}`);
}
