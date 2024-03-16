<!-- cSpell:disable -->

# Q&A Week 1

## Today's Agenda

- Welcome and intros

(Start recording!)

- Prep exercise: Cat Walk

- Cat Walk using callbacks ([Continuation Passing Style](https://bessiambre.medium.com/continuation-passing-style-patterns-for-javascript-5528449d3070))

- Cat Walk callback hell

- Promise experiments

- Event loop experiments in the browser debugger

- Go through questions

Advanced Event Loop video: <https://youtu.be/cCOL7MC4Pl0>

## Promise evolution

- 2011 jQuery 1.5 `deferred` promise-like object, e.g. `$.get()` Ajax call: <https://api.jquery.com/category/deferred-object/>
- 2012 Promise/A+ specification: <https://promisesaplus.com/>
- q, Bluebird: Promise libraries
- ES2015 native `Promise` support
- ES2017 native `async/await` support

## Questions

### Hailemariam Tsigabu Gebreyohannes

_how does promises improve the callback way of implementation?_

1. Replaces ever deeper nesting with chaining
2. Promises are garuanteed to be immutable once settled
3. Ease to aggregate (`Promise.all()`, `Promise.race()`, etc)

### Ahmet Dogan

_If our promise function does not return a resolvable value why do we need to use promise instead of normal function?_

Sometimes we are not really interested in what a promise resolved to (i.e., its resolved value) but rather that it has been resolved (i.e. the _when_ rather than the _what_). An example is the catwalk prep exercise.

### Mohammed Gumaan

1. _Where is it preferable to use callbacks over promises and vice versa?_

   This question is only relevant for _asynchronous_ callbacks. You can't use promises for synchronous callbacks nor do you need to.

   If the code is simple and does not involve multiple/nested callbacks then you might consider using a callback instead of creating a promise yourself. However if you are calling an async function provided by a modern JavaScript library it will in almost all cases return a promise.

2. _What are some techniques for debugging and testing asynchronous code in JavaScript applications?_

   - Debugging: use breakpoints
   - Testing: testing libraries such as `jest`

3. _Is the event loop exclusive to browsers?_

   No. Node.js also uses an event loop. Also GUIs (Windows, MacOS, Gnome) are event driven and use an event loop (in Windows it is called a message loop).

### Bereket

_What exactly is the Heap, in relation to the Stack?_

The Heap is a region of memory (RAM) reserved for storing data from variables (simples values, arrays, objects etc).

The Stack is a region of memory (RAM) reserved for keeping track of function calls and returns (information stored in stack frames that are pushed to, and popped from the stack).

### Ibrahim Sahin

_what is JSON? a JS object?_

From Windows Copilot: JSON (JavaScript Object Notation) is a standardized format for representing structured data.

JSON data is a string that can be converted to a JS object (provided that the JSON data string conforms to the syntax prescribed by the JSON standard).

### Hana Hulic

_What are some scenarios in which async functions can be used?_

Async functions are used to be notified when async processes are completed (either successfully or with failure). Async processes are used for operations that are (1) relative slow as compared to the speed of the CPU and (2) can be executed indepently from the main execution thread. Examples: network requests, database access, disk I/O etc.

### Rustam

_How then() method works?_

The `.then()` method registers a success handler function (and optionally an error handler function) to be called when a promise eventually resolves or repectively rejects.

For a deeper dive, see for example <https://medium.com/swlh/implement-a-simple-promise-in-javascript-20c9705f197a>

### Lidya Tesfamariam

_Async and promise perform the same task which one should we use? is there condition to use Async over promises_

### Rasha Alsh

_How can we deal with callback hell when working with others?_

In a project, agree with your team members on a common approach.
