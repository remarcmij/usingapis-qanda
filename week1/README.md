<!-- cSpell:disable -->

# Q&A Week 1

## Today's Agenda

(Start recording!)

- How was your (study) week?
- Prep exercise: Cat Walk
  - What do you think the advantages are of having the constants in the global scope? Are there any disadvantages?
  - To make the code loop we cannot use a standard JavaScript loop (`for` or `while`). Why is that?
  - Do you feel this version is easier to read than the version you made in the Browsers module?
  - Is this version more efficient or not or does it not matter?
- Promise experiments
- Event loop experiments

  One break around 13:15.

- Go through questions

- If time left: Cat Walk using callbacks

Advanced Event Loop video: <https://youtu.be/cCOL7MC4Pl0>

## Promise evolution

- 2011 jQuery 1.5 `deferred` promise-like object, e.g. `$.get()` Ajax call: <https://api.jquery.com/category/deferred-object/>
- 2012 Promise/A+ specification: <https://promisesaplus.com/>
- q, Bluebird: Promise libraries
- ES2015 native Promise support
- ES2017 native async/await support

## Questions

### Nida Ul Zafar

My first question is regarding `$.get()` and `new Promise()`. In the video tutorial the tutor used `new XMLHttpRequest()`; inside the `new Promise()` and later showed `$.get()` way of writing promise. Are they same or is there any difference between the two? what should we choose as a junior developer?

For video reference please click here.

`$.get()` method starts at 10:25

my second question is about generators in asynchronous javascript. Is it important for a junior developer to program using generators as it seems quite complicated?

### Mohamed Ebada

- How can i cancel a promise?
- Is async-await better than normal promises?

### Hikmet DAG

Hi, I made a quiz about Promise and gave the answer to the following question(Error 1 ),but the correct answer is Error 1 and Success 4. Why is Success 4 printed here?

```js
function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

let promise = job();

promise
  .then(function () {
    console.log('Success 1');
  })
  .then(function () {
    console.log('Success 2');
  })
  .then(function () {
    console.log('Success 3');
  })
  .catch(function () {
    console.log('Error 1');
  })
  .then(function () {
    console.log('Success 4');
  });
```

### mohamed belal

hello, my question is "in real life we make promises or just w will handle promises coming from fetch for example "

### Mohanad AL Hasan

Hi, my question is :
What is the difference between `then()` and `Async /await`?

### yusuf demir

Hello,
Promise is a special object. So is there any difference between creating a promise object and returning a promise?

```js
const myPromise = new Promise((resolve, reject) => {
  //....
});
```

And

```js
const myPromise = () => {
  return new Promise((resolve, reject) => {
    //...
  });
};
```

### Aleksei Kuznetsov

Is there are any alternatives to XMLHttpRequest to get data without reloading the page?

#### Answer

- `XMLHttpRequest` introduced in IE5 (1999) to enable AJAX calls
- `fetch` supported as of Chrome 42 (2015) but not in IE
- `axios` library uses `XMLHttpRequest` internally

### Elif Nur Kalkan

Hello, Aren’t these two pieces of code the same? Why is null used?

`promise.then(resultHandler).catch(errorHandler)`

`promise.then(resultHandler).then(null,errorHandler)`
