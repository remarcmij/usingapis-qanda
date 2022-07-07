//! Adding the missing `async`

async function foo() {
  return 42;
}

async function bar() {
  // added `async` prefix
  const result = await foo();
  console.log(result);
}

bar();
