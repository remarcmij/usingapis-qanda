//! Error handling
//
// Throwing an error inside an async function produces a rejected promise.
//
async function foo() {
  throw new Error('Oops, something went wrong...');
}

async function bar() {
  const result = await foo();
  console.log(result);
}

bar();
