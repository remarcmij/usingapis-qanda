async function logWithDelay1() {
  console.log('Start of function');

  for (const el of [1, 2, 3]) {
    await new Promise((resolve) => setTimeout(() => resolve(el), 1000));
    console.log(el);
  }

  console.log('End of function');
}

async function logWithDelay2() {
  console.log('Start of function');

  [1, 2, 3].forEach(async (el) => {
    await new Promise((resolve) => setTimeout(() => resolve(el), 1000));
    console.log(el);
  });

  console.log('End of function');
}

function logWithDelay3() {
  console.log('Start of function');

  let promise = Promise.resolve();

  [1, 2, 3].forEach((el) => {
    promise = promise.then(
      () =>
        new Promise((resolve) =>
          setTimeout(() => {
            resolve(el);
            console.log(el);
          }, 1000)
        )
    );
  });

  promise.then(() => console.log('Promises done'));

  console.log('End of function');
}

logWithDelay1();
