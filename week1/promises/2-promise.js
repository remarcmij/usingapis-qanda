const promise = new Promise((resolve, reject) => {
  resolve(42);
});

const foo = promise
  .then((result) => {
    console.log(1, result);
    console.log(2, promise);
  })
  .catch((err) => {
    console.log(3, err.message);
    console.log(4, promise);
  });

foo.then(() => {
  console.log(5, foo);
});
