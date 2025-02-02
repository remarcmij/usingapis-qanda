// import { AsyncPromise as Promise } from './async-promise.js';

export function checkDoubleDigits(number) {
  return new Promise((resolve, reject) => {
    const isDoubleDigit = number >= 10 && number <= 99;
    if (isDoubleDigit) {
      resolve('This is a double digit number!');
    } else {
      reject(new Error(`Expected a double digit number but got ${number}`));
    }
  });
}

function main() {
  checkDoubleDigits(9) // 1
    .then(
      // 2
      (message) => console.log(message),
      (error) => console.log(error.message)
    );
  checkDoubleDigits(10) // 3
    .then(
      // 4
      (message) => console.log(message),
      (error) => console.log(error.message)
    );
  checkDoubleDigits(99) // 5
    .then(
      // 6
      (message) => console.log(message),
      (error) => console.log(error.message)
    );
  checkDoubleDigits(100) // 7
    .then(
      // 8
      (message) => console.log(message),
      (error) => console.log(error.message)
    );
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
