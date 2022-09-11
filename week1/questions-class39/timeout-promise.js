// Convert callback-based setTimeout to promise-based version
function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

async function main() {
  console.time('elapsed');
  console.log('start');

  await sleep(1000);

  console.log('stop');
  console.timeEnd('elapsed');
}

main();
