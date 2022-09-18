//! Error handling
//  * Throwing an error inside an async function produces a rejected promise.

async function foo() {
  throw new Error('Oops, something went wrong...');
}

async function bar() {
  const result = await foo();
  console.log(result);
}

bar();

// #region Key learnings
//  1. If an error is thrown JavaScript walks up the call chain to find
//     a function that has a try/catch block.
//  2. If no try/catch block is found JavaScript will terminate the current
//     code execution and report an "unhandled error".
// #endregion
