//! Error handling: `try/catch`
//
// Errors that occur inside a `try` block can be caught in a `catch` block.
//
async function foo() {
  const a = 1;
  console.log(`a = ${a}`);
  a = 2;
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
