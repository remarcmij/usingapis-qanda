function worker(secs) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(secs), secs * 1000);
  });
}

function main() {
  const promises = [];

  // Create 5 promises
  for (let i = 1; i <= 5; i++) {
    promises.push(worker(i));
  }

  Promise.all(promises).then((results) => console.log(results));
}

main();
