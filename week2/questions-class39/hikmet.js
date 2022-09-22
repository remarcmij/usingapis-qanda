async function async1() {
  console.log(1);
  await async2();
  console.log(2);
}

async function async2() {
  console.log(3);
}

console.log(4);

setTimeout(function () {
  console.log(5);
}, 0);

async1();

new Promise(function (resolve) {
  console.log(6);
  resolve();
}).then(function () {
  console.log(7);
});

console.log(8);

/*
--- sync code: immediate execution
4
1
3
6
8
--- microtask 1: await from line 3
2
--- microtask 2: .then() from 23
7
--- macrotask: timeout from line 14
5
*/
