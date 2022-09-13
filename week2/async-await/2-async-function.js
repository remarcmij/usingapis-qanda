//! Asynchronous function:
//  * A function marked with the `async` keyword.

async function foo() {
  return 42;
}

const result = foo();

console.log(result);
