async function foo() {
  throw new Error('Oops, something went wrong...');
  // return Promise.reject(new Error('Oops, something went wrong...'));
}

async function bar() {
  try {
    const result = await foo();
    console.log(result);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}

bar();
