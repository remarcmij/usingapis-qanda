// A rejected promise can be caught in a `try/catch` block when using
// `async/await`.

function foo() {
  return new Promise((resolve, reject) => {
    reject(new Error('Oops, something went wrong...'));
  });
}

async function bar() {
  try {
    const result = await foo();
    console.log(result);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}

void bar();
