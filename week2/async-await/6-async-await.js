async function foo() {
  throw new Error('Oops, something went wrong...');
}

async function bar() {
  const result = await foo();
  console.log('result', result);
}

bar();
