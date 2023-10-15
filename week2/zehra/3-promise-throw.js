new Promise(function (resolve, reject) {
  try {
    setTimeout(() => {
      throw new Error('hoops!');
    }, 1000);
  } catch (err) {
    reject(err);
  }
}).catch((err) => console.log(err.message));
