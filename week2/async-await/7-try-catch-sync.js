//! Error handling: `try/catch`
//
// Errors that occur inside a `try` block can be caught in a `catch` block.
//
function foo() {
  const a = 1;
  a = 2;
}

function bar() {
  try {
    const result = foo();
    console.log(result);
  } catch (err) {
    console.log(`Oops: ${err.message}`);
  }
}

bar();
