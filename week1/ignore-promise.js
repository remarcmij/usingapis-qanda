function wait(time, data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}

let ignore = false;
setTimeout(() => {
  ignore = true;
}, 2000);

wait(3000, 'some data').then((value) => {
  if (ignore) {
    return;
  }
  console.log(`Value = ${value}`);
});
