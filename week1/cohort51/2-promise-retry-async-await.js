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

async function fetchData(retries = 3) {
  while (retries > 0) {
    try {
      return await fakeFetch();
    } catch (error) {
      console.log(`Retrying... (${retries} attempts left)`);
      retries--;
    }
  }
  throw new Error('fetch failed');
}

try {
  const value = await fetchData();
  console.log('Data', value);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
