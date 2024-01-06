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

### Tenzin Kunchok

1. _What is Micro task and macro task. why there are two different thing._
2. _is that something like css specificity?_

### Erhan

_If Javascript is a single-threaded language and it runs only one code in a line of time manner, then who runs the async functions or callbacks?_

### Mariam Hammad

_Can I use promises always instead of callbacks?_  
_Could you please show us some examples of converting normal codes to Promises?_  
_How can we know which data is working on the Stack and which on the Heap, and how can we prevent memory leaks?_

### Wajahat Ahmed

_Can you quickly explain Callback Hell and suggest alternate ways to avoid it?_

### Burhan Elaldi

_As we read in the promises section, promises are kinda second version of callbacks. Then why we need to use callbacks instead of using promises all the time?_

### Ali Othman

1. _Could you please explain the use of the "finally method" and how it can be beneficial in certain scenarios?_
2. _Can chaining promises lead to "callback hell"?_
3. _Could you provide an example to understand "microtasks"?_
4. _Can you explain "Promise constructor antipattern" with an example?_

### Ahmad Jasem

_Can you explain chaining with more complex example ?_

### Fressia

_When using Promise.race, how does this affect the flow of asynchronous operations? Could you please explain with an example?_
