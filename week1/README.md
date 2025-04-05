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

### Ahmad Zetouny

Q: I really like how Promises improve code readability compared to callbacks, but I still don't fully understand the major advantages. Besides easier error handling, resolve and reject feel like a simple return statement, they don't stop loops,  intervals or even timeouts. So: Should we always use Promises, even in small apps? Or are they more useful in large apps with many async operations?
Is it possible to abort or cancel a Promise once it's running?
(edited)

### Oleksandr Starshynov

Q: I can use Promise or Promise.all to organize my code. But such constructs means that I wait for their result and only then can I move on with the code. If I, for example, combine five promises in promise.all, but am only willing to wait 30 seconds for execution, how can I interrupt the wait process and after 30 seconds count all uncompleted promises as completed with an error?

### Yana Seniuk

How can you implement a cancellable promise?
Сause promise with pending status and waiting for resolve or reject. But what if the user cancelled action and we don't need to wait response now. Or  if the waiting time for the user more than 10 sec I want to cancel promise. (edited) 

### Nikita Stefanchuk

Q: Why does a .then() chain continue to execute even after one of the Promises fails if you don't use .catch()? And in what cases is it better to use .catch() instead of the second argument in .then() for error handling?