//! Using `await`:
//  * The `await` keyword causes the code to "wait" for a promise to become
//  * resolved without blocking the code execution.

async function foo() {
  return 42;
}

const result = await foo();

console.log(result);

// #region Key learnings:
//  1. The `await` keyword pauses the execution until the promise is settled
//     (either resolved or reject)
//  2. If the promise is resolved the resolved value is returned that can be
//     (optionally) assigned to a variable or used in some other way.
//  3. If the promise is rejected an error is thrown and the assignment is not
//     performed.
// #endregion
