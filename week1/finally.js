const timer = setTimeout(() => {
  console.log('timed out');
}, 1000);

// Create a resolved promise
const finalPromise = Promise.resolve('42')
  .then((result) => {
    console.log('then', result);
    return result;
  })
  .catch((err) => {
    console.log('catch', err);
    return err;
  })
  .finally(() => {
    console.log('finally');
    clearTimeout(timer);
  });
