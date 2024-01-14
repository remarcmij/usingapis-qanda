<!-- cSpell:disable -->

# Q&A Week 2

## Today's Agenda

- Welcome

(Start recording)

- Topics in week 2:

  - async/await
  - try/catch
  - web APIs
  - fetch
  - JSON

- Async/await experiments

- Prep exercises student solutions:
  - Catwalk async/await
  - Pokemon fetch try/catch
- Error handling in Web Apps
- JSON experiments
- Example Web apps (GitHub API, Nobel Prize API)
- Fetch/CORS experiment

- Go through questions

Break at 13:15

### Error Handling in Web Apps

- We generally talk about a _happy path_ and an _error path_ (or _unhappy path_) for your code.

  - The _happy path_ is the execution path through your code if all is well: no errors encountered.
  - The _error path_ is the execution path through your code if an error is encountered.

This section is about designing the _error path_.

- Ultimate goal is to inform the user of _anticipated_ application errors and, if possible, give options on how to gracefully recover from an error.
- Logging to the browser console is NOT equivalent to informing the user. End users do not routinely look for errors in the browsers console (developers on the other hand should always keep an eye on the console when developing for the browser).
- Handle the error in such a way that:
  a. The function that normally expects a valid response does not crash.
  b. The error is rendered to the page, preferable in user (non-technical) terms.
- You should not try and handle JavaScript runtime errors or application bugs, such as trying to modify a `const` variable, etc. Such errors should be allowed to crash your program (with a stack trace) so that you (as a developer) get alerted to the problem early and can promptly fix it.

## Questions

### Mariam Hammad

_When do I need to use async/await….with try..catch and fetch….with .then (like regular promises)?_

It is up to you. You can use both forms. `async/await` is a more recent addition to the JavaScript language. (`try/catch` was already part of the langguage). `async/await` lets you write code that resembles (the more familiar) synchronous code. Many developers prefer it over `.then()/.catch()`.

### Tenzin Kunchok

_Why asynchronous/await has no specific error handling rather than old try and catch?_

`async/await` lets you write code that fits neatly into the "synchronous" coding paradigm, including the existing `try/catch` construct.

### Ali Othman

_I find it difficult to implement what we have studied in the APIs session. Could you please give us a real example of fetching data from a website and how can we ues the response data?_

### Erhan

_Let's suppose we have a closure function that takes an async callback function as a parameter. Do we need to call that closure function also asynchronously?_

Any function that uses the `await` keyword inside its function body needs to be declared with the `async` keyword prefix.

### Ahmad Jasem

_Is the async/await preferred only when working with fetching data._

'async/await` can be used with any asynchronous functions that returns a promise. Asynchronous operations include fetching data across a network but also operations such as reading and writing files, querying databases, etc.

### Fressia Barrios

_In which cases would it be okay to nest try/catch blocks inside try/catch blocks, and what’s the “limit”/when do you stop?_

As far as I can tell there is no hard limit, but you will want to keep your error handling simple and focussed. Thrown errors bubble up in the call chain until an error handler (`try/catch` block) is found. Errors should be caught at a level where they can be handled appropriately.

### Sabina Sandais

_Please explain how to use the network tab in developer tools while using APIs._

### Wajahat Ahmed

_Explain when to use async/await and when to use try/catch in JS when dealing with asynchronous tasks. Give simple examples for situations where each method is better suited._

### Burhan Elaldi

_how can we use asynchronous programming features like Async/Await along with try/catch to handle errors effectively during API requests?_
