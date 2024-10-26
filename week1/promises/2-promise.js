const x = new Promise((resolve, reject) => {
  resolve(42);
});

const y = x
  .then((result) => {
    console.log(1, result);
    console.log(2, x);
  })
  .catch((err) => {
    console.log(3, err.message);
    console.log(4, x);
  });

console.log(5, y);
