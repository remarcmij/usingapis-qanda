new Promise((resolve, reject) => {
  setTimeout(() => reject('hey!'), 1000);
}).catch(console.log);
