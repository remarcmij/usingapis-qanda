const promise = new Promise((resolve, reject) => {
  reject(new Error('Oops... Something went wrong!'));
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

console.log(5, foo);
