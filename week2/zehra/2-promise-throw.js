new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error('hoops!');
  }, 1000);
}).catch((err) => console.log(err.message));
