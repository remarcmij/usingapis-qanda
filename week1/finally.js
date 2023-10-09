console.log('starting');

const timer = setInterval(() => {
  console.log('blip');
}, 1000);

// Create a resolved promise
Promise.reject()
  .then(() => {
    console.log('then 1');
  })
  .then(() => {
    console.log('then 2');
  })
  .then(() => {
    console.log('then 3');
  })
  .catch(() => {
    console.log('catch 1');
  })
  .finally(() => {
    console.log('finally');
    clearInterval(timer);
  });

console.log('ending');
