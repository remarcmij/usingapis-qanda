try {
  console.log('entering try block');
  setTimeout(() => {
    throw new Error('hoops!');
  }, 1000);
  console.log('exiting try block');
} catch (err) {
  console.log(err.message);
}
