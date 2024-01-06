<!-- cSpell:disable -->

# Q&A Week 1

## Today's Agenda

- Welcome and intros

(Start recording!)

- Prep exercise: Cat Walk

  - What do you think the advantages are of having the constants in the global scope? Are there any disadvantages?
  - To make the code loop we cannot use a standard JavaScript loop (`for` or `while`). Why is that?
  - Do you feel this version is easier to read than the version you made in the Browsers module?
  - Is this version more efficient or not or does it not matter?

- Cat Walk using callbacks ([Continuation Passing Style](https://bessiambre.medium.com/continuation-passing-style-patterns-for-javascript-5528449d3070))

- Cat Walk callback hell

- Promise experiments

- Event loop experiments in the browser debugger

- Go through questions

One break around 13:15.

Advanced Event Loop video: <https://youtu.be/cCOL7MC4Pl0>

## Promise evolution

- 2011 jQuery 1.5 `deferred` promise-like object, e.g. `$.get()` Ajax call: <https://api.jquery.com/category/deferred-object/>
- 2012 Promise/A+ specification: <https://promisesaplus.com/>
- q, Bluebird: Promise libraries
- ES2015 native `Promise` support
- ES2017 native `async/await` support

## Questions

### Student 1

_Couldn’t we quite often use async/await where Promises would be used?_

`async/await` is a newer alternative for the `.then()/.catch()` Promise methods. The promises are still there.

### Student 2

_How can I optimize the performance of the dancing cat animation to ensure smooth transitions between walking, dancing, and walking again, especially on devices with lower processing power or slower network connections?_

There is nothing that promises can do to help optimize the graphic performance. In this particular prep exercise animated GIFs are used. The programmer has no control over the internal GIF animation. You can only control, as you did, how the GIF as a whole move from left to right.

I see no obvious solutions for how to ensure smooth transitions on slower devices, but you may want to check this out:

- https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

### Student 3

1. _In what situations would you recommend using promises, and when would you prefer using callbacks?_

   We need to make a distinction between synchronous callbacks and asynchronous callbacks. Synchronous callbacks are functions passed as parameters to [higher order functions](https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/) and called within the latter as part of their regular (synchronous) execution. No asynchronous event is involved and therefore promises are not needed nor in fact possible. Examples of synchronous callbacks are the functions that you pass to array manipultion methods, such a `.map()` and `.filter()`.

   Asynchronous callbacks were the only possibility to handle asynchrous events before promises became available in JavaScript (see the [Promise evolution](#promise-evolution) section above). Older JavaScript code and libraries often still use asynchronous callbacks. For new code I would recommend to use promises wherever possible. Sometimes you can also create a "promised" version of code that still uses a callback. See for example the `timeoutPromise.js` file in the `week1` folder.

2. _I understand that promises offer better error handling with the catch block. Could you explain how this error handling mechanism works in more detail?_

   When an error is thrown (or a promise is rejected) somewhere in a promise chain the JavaScript engine will call the first `onError` handler it can find down the chain. This can be in the form of a `.catch()` method of a `.then()` method that has an `onError` handler as its second parameter.

   Remember that each `.then()` and `.catch()` method returns a new promise. If you don't return something explicitly it will a return a promise that is fulfilled with the value `undefined`.

### Student 4

_I noticed that errors in promises can be handled using two different approaches:_

`.then(onSuccess, onError)`  
_or_  
`.then(onSuccess).catch(onError)`

- _What are the main factors or considerations that would influence our choice between using one over the other?_

- _Or Is it only influenced by the structure of the incoming data or/and the functions being executed?_

`.catch(onError)` is just a syntactic sweeter version of `.then(null, onError)` i.e., a `.then()` method without an `onSuccess` handler (as indicated by passing `null` as the first parameter instead of a handler function ) and only an `onError` handler passed as the second parameter.

I personally prefer separate `.then()` and `.catch()` methods as in my view it makes the code more readable.

### Student 5

_Could you describe a situation where you might prefer using promise chaining (`.then()`) over `async/await`, and vice versa?_

If you work on existing (perhaps older) code that uses `.then()` throughout it would be wise to maintain the same style. When you are writing new code `async/await` is preferred (but when working on a team project all team member must agree on a common approach).

### Student 6

_It seems that promises are better than callbacks... In what scenarios would it be considered best practice to use callbacks?_

See my answer on Lena's question.

### Student 7

- _Are there scenarios where callbacks are still a preferred choice over Promises in modern JavaScript development?_

  See my answer on Lena's question.

- _Could you please clarify the concept of APIs and How do callbacks and promises relate to APIs? I am still a bit unclear about this topic._

  When you request data from a Web API you will be making asynchronous network requests, e.g. by using the `fetch()` function provided by the host API of the browser (in the EventLoop PDF `fetch` would be located in the same Host API box as the timers). `fetch()` (covered in week 2) returns a promise that is fulfilled when the network request is succesfully completed (or rejected in case of network errors).

### Student 8

- _In a situation where you encounter “callback hell,” how would you refactor the code to make it more manageable?_

  Make each callback a separate, named function and pass that function as the last parameter to the asynchronous function. This method is called [Continuation Passing Style](https://bessiambre.medium.com/continuation-passing-style-patterns-for-javascript-5528449d3070). See the `catwalk-callbacks` folder for an example.

  Do not 'inline' callback code as was done in the `catwalk-hell` example folder. This makes the code very hard to understand.

- _In the context of career training for web development, how important is a deep understanding of asynchronous programming concepts, and what benefits does it offer for professional growth?_

  You will be using asynchronous code all over the place. There is no escaping it.

### Student 9

_I couldn’t really get the idea behind `finally`. I understand how it works but I couldn’t understand where we can use it._

You can use `.finally()` at the end of a promise chainto clean up resources irrespective of whether the promise is fulfilled or rejected. Think of resources such as interval timers, open database connections, open files etc. See the `finally.js` file for an example.

### Student 10

_When I research the promises on the web, I always encounter of using them on getting data from a server or database. Are there any other different use cases in real life as a developer? For example we used in catwalk exercise but we already did it without promise previous week. Is the promise the better way to make this exercise and why?_

The use of promises in the catwalk exercise is of course a bit artificial but nevertheless makes the code easier to understand as just a repeated sequence of events. You should always strive to make your code easy to understand, for the benefit of yourself looking back at your code some time in the future or for that of your team mates that must maintain your code as you move on the other projects.

### Student 11

_What is your comments on chaining, I have noticed that we can chain several asynchronous operations but we will end up in the same scenario as "callback hell"._

For an exaggerated example compare `catwalk-hell` with `catwalk-prep`.

### Student 12

- _i often see people use `await fetch`, when i hover over fetch i see a promise part. what is the connection between them ?_
- _when we use `fetch` , daes it make promise itself ?_

`fetch()` returns a promise. No need to create one yourself.
