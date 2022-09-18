//! `await` without `async`
//  * Inside a function you can only use `await` if the calling function itself is
//  * marked with `async`.

async function foo() {
  return 42;
}

function bar() {
  const result = await foo();
  console.log(result);
}

bar();

// #region Key learnings
//  1. You can only use the `await` keyword inside a function that is marked
//     `async`.
//  2. You will get a runtime error if you forget to add the `async` keyword
// #endregion