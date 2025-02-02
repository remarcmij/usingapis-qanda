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
    .then((message) => console.log(message)) // 2
    .catch((error) => console.log(error.message)); // 3

  checkDoubleDigits(10) // 4
    .then((message) => console.log(message)) // 5
    .catch((error) => console.log(error.message)); // 6

  checkDoubleDigits(99) // 7
    .then((message) => console.log(message)) // 8
    .catch((error) => console.log(error.message)); // 9

  checkDoubleDigits(100) // 10
    .then((message) => console.log(message)) // 11
    .catch((error) => console.log(error.message)); // 12
}

if (process.env.NODE_ENV !== 'test') {
  main();
}

// 1 4 7 10 2 5 8 11
