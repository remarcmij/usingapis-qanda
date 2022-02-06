function wait(message, delay = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay === 50) {
        reject(new Error(`${message} rejected`));
        return;
      }
      resolve(`${message} resolved`);
    }, delay);
  });
}

const promises1 = [wait('first', 200), wait('second', 60), wait('third', 100)];

Promise.all(promises1)
  .then((results) => {
    console.log('all:', results);
  })
  .catch((err) => {
    console.error('all:', err.message);
  });

Promise.race(promises1)
  .then((results) => {
    console.log('race:', results);
  })
  .catch((err) => {
    console.error('race:', err.message);
  });
