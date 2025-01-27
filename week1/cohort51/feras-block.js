setTimeout(() => {
  console.log('This should run after 0.5 seconds');
}, 500);

let start = Date.now();
while (Date.now() - start < 3000) {
  // do nothing
}
console.log('start');
