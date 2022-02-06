<!-- cSpell:disable -->

# Q&A Week 1

## Today's Agenda

(Start recording!)

- How is it going so far?
- Prep exercise: Cat Walk
- Event loop experiments
- Promise experiments

  One break around 13:15.

- Go through questions

Advanced Event Loop video: <https://youtu.be/cCOL7MC4Pl0>

## 1. Ali\*

Q1: Should I use multi promises using Promise.all or Promise.race. I can not understand which one should used for ?

## 2. Aykut\*

Q1: <https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/its-quiz-time>  
Can we solve the last quiz question in this link step by step

## 3. Burak

Q1: What should we pay attention to when pulling data from API's? How should we use the Youtube Data API, if we move on from an example? How do we implement this? What does resource cost mean?
Thank you.

A1: As in this link? <https://developers.google.com/youtube/v3/getting-started?hl=en#quota>

## 4. Huseyn

Q1: Resolve and reject structure reminds me if-else logic. Why do we need resolve-reject instead of if-else. For sure they serve different purposes and logics but need more info and understanding on that.

## 5. Mohammed\*

Q1: When to use Promises(.then) and when to use Async Await? Are those the substitutes of each other?

## 6. Sina

Q1: when I practice with callbacks and promises & i have a simple log statement, I see the place my data appears among present data in console is changing each time . I mean other data related to extensions or browser itself . my log statement each time appears down or up of some of them . how does it define by browser ?how is it dealing with extensions in general ?

Q2: I also see an if statement in the promises ,why programmers needed another syntax to handle those requests?

Q3: here we get the bye message that supposed to be error, it means our promise has rejected, I don’t get it

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hi');
  }, 1000);
  setTimeout(() => {
    reject('bye');
  }, 500);
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
```

## 7. Samer

Q1: I noticed the callback and promise give the same results.
What is the difference between Callback and Promise?
can explain with an example

## 8. Ensar\*

Q1: In an async function, it is generally used await inside it. Does it mean that the lines used await keyword runs synchronously inside the async function but the async function itself runs asynchronously between other functions? What if don’t we use await keyword?

## 9. Talha

Q1: Can we review the code blocks below together?
I don’t understand how we reach the given outputs.

> Same question as Aykut?

1\)

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

// output : Error 1, Success 4
```

2\)

```js
function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve('success');
    } else {
      reject('error');
    }
  });
}

let promise = job(true);

promise

  .then(function (data) {
    console.log(data);

    return job(true);
  })

  .then(function (data) {
    if (data !== 'victory') {
      throw 'Defeat';
    }

    return job(true);
  })

  .then(function (data) {
    console.log(data);
  })

  .catch(function (error) {
    console.log(error);

    return job(false);
  })

  .then(function (data) {
    console.log(data);

    return job(true);
  })

  .catch(function (error) {
    console.log(error);

    return 'Error caught';
  })

  .then(function (data) {
    console.log(data);

    return new Error('test');
  })

  .then(function (data) {
    console.log('Success:', data.message);
  })

  .catch(function (data) {
    console.log('Error:', data.message);
  });

// output: success, Defeat, error, Error Caught, Success: test
```

## 10. Onur\*

Q1: What does one-threaded event loop? What's the difference between one-threaded and multi-threaded languages?

What are the pros&cons?

## 11. Ertuğrul\*

Q1: There are callbacks, promises, async and await. Depending on needs and development on JS, the last point seems async and await. Which one is the best practice do you use in real life projects?

## 12. Fedor

Q1: How does JS decide which callback will be synchronous and which - Asynchronous?
