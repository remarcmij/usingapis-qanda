<!-- cSpell:disable -->

# Q&A Week 1

## Today's Agenda

- Welcome and intros:
  - where from?
  - what did you do previously?
  - any prior programming experience?

(Start recording!)

- Blocking

- Promise experiments

- Demo of custom promises and microtasks

- Event loop experiments in the browser debugger

- Prep exercise: Cat Walk

- Go through questions

More event loop videos:

- <https://youtu.be/eiC58R16hb8?si=NESGMiIrCvNFrEjT>
- <https://youtu.be/cCOL7MC4Pl0>

## Promise evolution

- 2011 jQuery 1.5 `deferred` promise-like object, e.g. `$.get()` Ajax call: <https://api.jquery.com/category/deferred-object/>
- 2012 Promise/A+ specification: <https://promisesaplus.com/>
- q, Bluebird: Promise libraries
- ES2015 native `Promise` support
- ES2017 native `async/await` support

## Questions

### Lidiia Starshynova

Hello. My question to the Q&A session.
I have a function that returns a promis. I call it 2 times. If I look at the code, the expected order of answers is reject-resolve. But in the log I see the order of resolve-reject. What changes the order of answers? To me it looks like it first selects the resolve answer and then the reject answer.
Thank you

Answer: Need the code to answer

### Alex P

- How does the IntersectionObserver API work and how can I use it to load additional content when a user scrolls to the bottom of a page?

Answer: This is the first time I hear about IntersectionObserver. Would need to do research but you can do that yourself too. Would take too long to discuss here are also is also not directly related to today's topic. We can however, look at the scenario where this could be used,

- Explain the difference between localStorage and sessionStorage in the Web Storage API. Which one should I use to store user preferences on a website?

Answer: Session storage is cleared when the session is closed (i.e. when closing the browser app). Local storage is persisted across browser executions. Best place to store user preferences in a fullstack app is on the server, so they are shared across devices.

### Abdul kader

Hello, my question is
if I have promise function and I want to set setInterval
for  this function but it's doesn't work

Answer: Need to see the code

### Ruba Hasan

How can we process a set of data at the same time using Promises without using Promise.all?

Answer: See [ruba.js](./cohort50/ruba.js)

### Esen Karataş

How can I cancel a promise or prevent it from executing further once it has started?

Answer: Once a promise is created it **will** settle (i.e. its microtask is enqueued and **will** run). You can ignore the result or perhaps cancel the event that the promise monitor and then reject the promise.

See example [here](./cohort50/esen/).

### Fady Saadeddin

what is the difference between .then() and catch and how they handle the process of promise?

Answer: `.catch()` is a `.then()` in disguise. See [Some Important Promise Characteristics](https://github.com/remarcmij/promise-demo?tab=readme-ov-file#some-important-promise-characteristics). A `.catch()` method handles promise rejections.

### Liya Oz

How to decide when to use promises versus async/await?

Answer: Async/await is also used with promises. The decision to make concerns how to _consume_ promises. Async/await is a later addition to the JavaScript language. Prior to that we only had `.then()` and `.catch()`. Choice is a personal preference or a team decision. Most people prefer async/await now as it make the code more look like synchronous code.

### Vlada Bessikalo

1) In what cases can we use finally-block in Promises? Could you please give a practical example?

Answer: See example [finally.js](./finally.js).

2) What's the practical difference between using Promises and async/await in JavaScript, and when would you use one over the other?
Promises:

```js
function fetchData() {
  return fetch("https://api.example.com/data")
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

async/await:

```js
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
```

Answer: Discuss online
