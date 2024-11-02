let count = 0;
const intervalTimer = setInterval(() => {
  count += 1;
  console.log(count);
}, 1000);

new Promise((resolve, reject) => {
  setTimeout(
    () => (Math.random() > 0.5 ? resolve(42) : reject(new Error('Oops'))),
    2000 + Math.random() * 5000
  );
})
  .then((result) => {
    console.log('result', result);
    return result;
  })
  .catch((err) => {
    console.log('error', err.message);
    return err;
  })
  .finally(() => {
    clearInterval(intervalTimer);
  });
