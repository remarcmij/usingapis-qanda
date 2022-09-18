//! Asynchronous function:
//  * A function marked with the `async` keyword.

async function foo() {
  return 42;
}

const result = foo();

console.log(result);

// #region Key learnings:
//  1. An `async` function always returns a promise
//  2. You can call an `async` function without prefixing the call
//     with `await`. In that case you get back promise and not a
//     resolved value.
// #endregion
