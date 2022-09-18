//! A rejected promise can be caught with `try/catch` when using `async/await`.

function foo() {
  return new Promise((resolve, reject) => {
    // resolve(42);
    reject(new Error('Oops, something went wrong...'));
    // throw new Error('Oops, something went wrong...');
  });
}

async function baz() {
  return 42;
  // throw new Error('Oops, something went wrong...');
}

async function bar() {
  try {
    const result = await foo();
    console.log('try', result);
  } catch (err) {
    console.error('catch', `Error: ${err.message}`);
  }
}

void bar();
