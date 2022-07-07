// A thrown error (either in the promise constructor function itself
// or in a function that is calls) causes the promise to be rejected.
// `async/await`.
//
function baz() {
  const a = 1;
  a = 2;
}

function foo() {
  return new Promise((resolve, reject) => {
    baz();
  });
}

async function bar() {
  try {
    const result = await foo();
    console.log(result);
  } catch (err) {
    console.log(`Oops: ${err.message}`);
  }
}

void bar();
