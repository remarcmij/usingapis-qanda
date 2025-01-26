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

### Sertan Erdogan

How can we cancel a Promise after creating it? Should we always resolve/reject it? What is the best way to test this to see they are working as we expected?

A: You cannot cancel a promise. You can choose to ignore its outcome. Or you can try to abort the underlying asynchronous process that the promise monitors and let it reject the promise. 

A promise can only be in one of three states: `pending`, `fulfilled` or `rejected`. There is no `cancelled` state.

### Volodymyr Korotun

After we have received the array using `Promise.all()`, we can work with it as with a regular array or better to use another technique for working with several of promises.

A: The `Promise.all()` method takes an array of promises and, if resolved succesfully, return an array of resolved values, in the same order as the array of promises: the first value is the result of the first promises in the promise array, etc. You can the result array is just a regular array.

### Konjit

In most programming languages, we achieve async functionality using threads or processes. How does JavaScript achieve async behavior while being single-threaded by nature?

A: While JavaScript is a single-threaded language, it's host environment (i.e. a browser or Node.js) is multi-threaded. Using JavaScript you can make multiple requests (e.g. network request, timer requests etc) to the host environment (say, a browser), which can run multi-threaded. After the host environment completes a request it posts an event in the JavaScript event queue where JavaScript can pick it up when it is is not doing other things (i.e., when its call stack is empty).

### Samira

What are the key differences between using Promises directly and using async/await, and in which situations would you prefer one over the other?

A: The `async/await` syntax (which is by the way next week's topic) is a newer  alternative to `.then()/.catch()` chains for consuming promises. When promises were first introduced in the JavaScript language we only had `.then()` and `.catch()`. Many developers prefer the newer `async/await` syntax as it makes asynchronous code to resemble more like synchronous code.

### Lidya T

Why does the fetch() API in JavaScript not automatically reject promises for HTTP response errors, but instead require explicit handling of the response status?

```js
fetch("https://randomuser.me/api1")
  .then((response) => response.json())
  .catch((error) => console. log("Fetch error caught:", error.message));
```

A: It's a design decision. It leaves it to the developer to decide how to handle HTTP errors. Only network errors (e.g. network not available, DNS error, request timeout, etc) causes unconditional rejects.

```js
fetch("https://randomuser.me/api1")
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error! Status: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console. log("Fetch error caught:", error.message);
  });
```

### Hossein Shokri Kelisa

Can we call both of  resolve() and reject() in a Promise? Which one will the Promise settle with?

A: You can call `resolve()` and `reject()` many times, but the first call (either to `resolve()` or `reject()`) settles the promise. After that, subsequent calls have no effect.

### Rizan ibrahim

Why we use the return with promises since we are calling the function within then , just like we are calling the callback?!

A: Question needs further context.

### Salih Furkan Kara

If I have a lot of tasks in the callback queue—like a callback function that runs every time the user scrolls the page—could that end up blocking other async operations, especially ones that take a long time to resolve?

A: It is up to you to keep the execution time of each task relatively short. If the JavaScript engine is busy executing a task it cannot pick up a next task from the event queue until it finishes the current task.

How does the event loop decide which tasks to move to the call stack first? Does it prioritize certain tasks over others?

A: The JavaScript engine does not prioritize tasks in an event queue: first come, first serve. However there are two separate queues: one for **microtasks** and another one for **macrotasks**. The first one is used for promises, the second one for other asynchronous events, such a network requests, timeouts, browser events (e.g. mouse clicks, etc). Events from the **microtasks** queue take precedence over the events from the macrotask queue.

### Feras Al-Demashki

Hello, I'm trying to use setTimeout  in this code. it is  set to run after 0.5 seconds, but I have a loop that takes 3 seconds to complete. How can I make sure the setTimeout callback executes after the 0.5 seconds, even though the loop is running?

```js
setTimeout(() => {
  console.log("This should run after 0.5 seconds");
}, 500);

let start = Date.now();
while (Date.now() - start < 3000) {
}
console.log("start");
```

A: The timeout event is placed in the macrotask queue after exactly 500 millisecond, but the JavaScript engine can only pick it up once it has completed the `while` loop.

### Khiro A

How .then() and async/await behave differently , and in which situations I can choose one over the other.

A: See my answer to the question of Samira.

### Ali Abbas

What is the key difference between using .then() and .catch() for handling promises versus using async/await? When should we choose one approach over the other?

A: See my answer to the question of Samira.

### Glib S

What if we created a promise and it gets rejected on the first attempt, but we would like to make a few more retries? What is the best way to implement it? Just calling a function for a few times doesn’t feel like the best approach

A: A promise cannot be retried: once it is settled its outcome is immutable (cannot be changed). To retry, you can create a new promise for the same underlying asynchronous process to be retried. See the example in the cohort51 folder [here](./cohort51/glib.js).
