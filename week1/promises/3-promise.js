const x = new Promise((resolve, reject) => {
  reject(new Error('Oops... Something went wrong!'));
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

/*
Ruba:

3 Oops...
4 Promise 

5 Promise message

*/
