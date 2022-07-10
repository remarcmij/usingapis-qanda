//! `await` without `async`
//
// Inside a function you can only use `await` if the calling function itself is
// marked with `async`.
//
async function foo() {
  return 42;
}

async function bar() {
  const result = await foo();
  console.log(result);
}

bar();
