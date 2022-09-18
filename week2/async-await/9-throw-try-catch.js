//! A thrown error (either in the promise constructor function itself
//! or in a function that is calls) causes the promise to be rejected.
//! `async/await`.

function baz() {
  const a = 1;
  a = 2; // WTF?
  console.log('hello');
  return 42;
}

function foo() {
  return new Promise((resolve, reject) => {
    const result = baz();
    resolve(result);
  });
}

async function bar() {
  try {
    const result = await foo();
    console.log(result);
  } catch (err) {
    console.error(`Oops: ${err.message}`);
  }
}

void bar();

// #region Key learnings
//  1. An error thrown by a function that is called (directly or indirectly)
//     inside a promise constructor will also cause a promise to be rejected.
// #endregion
