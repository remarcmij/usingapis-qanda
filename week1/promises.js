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

const promises1 = [
  wait('first', 5000),
  wait('second', 1000),
  wait('third', 2000),
];

async function foo() {
  console.log('foo starts');
  const results = await Promise.all(promises1);
  console.log('foo ends');
  console.log('all:', results);
}

foo();

// Promise.race(promises1)
//   .then((results) => {
//     console.log('race:', results);
//   })
//   .catch((err) => {
//     console.error('race:', err.message);
//   });
