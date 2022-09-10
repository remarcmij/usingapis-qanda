// Convert callback-based setTimeout to promise-based version
function timeoutPromise(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

console.log('start');
timeoutPromise(1000).then(() => console.log('stop'));
