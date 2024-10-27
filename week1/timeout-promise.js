function timeoutPromise(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

timeoutPromise(1000).then(() => console.log('Hi'));
