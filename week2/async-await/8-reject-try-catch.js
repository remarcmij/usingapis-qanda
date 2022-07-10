// A rejected promise can be caught in a `try/catch` block when using
// `async/await`.

function foo() {
  return new Promise(() => {
    throw new Error('Oops, something went wrong...');
  });
}

async function bar() {
  try {
    console.log('try block');
    const result = await foo();
    console.log(result);
  } catch (err) {
    console.log('catch block');
    console.log(`Error: ${err.message}`);
  }
}

void bar();
