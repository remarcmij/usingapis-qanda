// import { AsyncPromise as Promise } from './async-promise.js';

function foo() {
  return new Promise((resolve, reject) => {
    reject(new Error('Oops... Something went wrong'));
    // throw new Error('Oops... Something went wrong');
  });
}

async function main() {
  try {
    await foo();
  } catch (err) {
    console.error(err.message);
  }
}

main();
