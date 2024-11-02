let count = 0;
const intervalTimer = setInterval(() => {
  count += 1;
  console.log(count);
}, 1000);

new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve(42);
    } else {
      reject(new Error('Oops'));
    }
  }, 3000);
})
  .then((result) => {
    console.log('result:', result);
  })
  .catch((err) => {
    console.log('error:', err.message);
  })
  .finally(() => {
    clearInterval(intervalTimer);
  });
