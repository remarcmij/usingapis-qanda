import { baz } from './lib/baz.js';

function foo() {
  return new Promise((resolve, reject) => {
    const result = baz();
    resolve(result);
  });
}

async function bar() {
  try {
    const result = await foo();
    console.log('result', result);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}

bar();
