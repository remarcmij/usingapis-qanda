//! Error handling: `try/catch`
//  * Errors that occur inside a `try` block can be caught in a `catch` block.

async function foo() {
  const a = 1;
  console.log(`a = ${a}`);
  a = 2; // WTF?
}

async function bar() {
  try {
    const result = await foo();
    console.log(result);
  } catch (err) {
    console.log(`Oops: ${err.message}`);
  }
}

bar();

// #region Note
// Note: use try/catch only to catch anticipated errors.
// A runtime error is not one of those. Better to let the app crash
// with a stack trace so that you can fix the error.
// #endregion
