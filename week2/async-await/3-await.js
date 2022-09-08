//! Using `await`:
// * The `await` keyword causes the code to "wait" for a promise to become
// * resolved without blocking the code execution.

async function foo() {
  return 42;
}

const result = await foo();

console.log(result);
