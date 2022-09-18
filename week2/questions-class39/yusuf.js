async function func1() {
  // return 42;
  throw new Error('Oops, something went wrong');
}

async function myFunc() {
  try {
    const data = await func1();
    return data;
  } catch (error) {
    return error; //?
  }
}

function main() {
  myFunc()
    .then((data) => console.log('then', data))
    .catch((err) => console.err('catch', err));
}

main();
