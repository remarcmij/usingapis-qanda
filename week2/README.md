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

- Prep exercises student solutions:
  - Catwalk async/await
  - Fetch try/catch
- Async/await experiments
- Error handling in Web Apps
- Fetch/CORS experiment
- JSON experiments
- "Cancel promise"

- Go through questions

Break at 13:15

### Error Handling in Web Apps

- We generally talk about a _happy path_ and an _error path_ for your code.

  - The _happy path_ is the execution path through your code when all is well: no errors encountered.
  - The _error path_ is the execution path through your code when an error is encountered.

This section is about designing the _error path_.

- Ultimate goal is to inform the user of _anticipated_ application errors and, if possible, give options on how to gracefully recover from an error.
- Logging to the browser console is NOT equivalent to informing the user. End users do not routinely look for errors in the browsers console (developers on the other hand should always keep an eye on the console when developing for the browser).
- Handle the error in such a way that:
  a. The function that normally expects a valid response does not crash.
  b. The error is rendered to the page, preferable in user (non-technical) terms.
- You should not try and handle JavaScript runtime errors or application bugs, such as trying to modify a `const` variable, etc. Such errors should be allowed to crash your program (with a stack trace) so that you (as a developer) get alerted to the problem early and can promptly fix it.

## Questions

### Rama

_Question: In this code, we're using both await and try/catch for handling asynchronous operations and errors. Can you explain the specific scenarios in which try/catch should be used versus when await alone is sufficient for handling errors during asynchronous operations?_

`await` by itself does not handle errors. When using `async/await` you should always use a `try/catch` block except if you know that it should be logically impossible for an application error to be thrown (like in the catwalk prep exercise). In that case you may or in fact should leave out a `try/catch` block.

### Kumait Mustafa

_Is it doable individually throughout using PC only ?_

- _To create an API_Key for data-file hosted on personal cloud's account (eg. google-drive)_
- _To fetch such a file then on local-host webpage._

_Is therefor any beginners friendly simple approach ?_

In general you should not embed API keys in front-end code. This represents a security breach as anyone looking at your code can steal your API key. For the same reason you should also never add an API key to a git commit when using public GitHub repositories.

Normally you will access Web APIs requiring an API key via a backend component of your application that can make the request on behalf of your frontend code, without exposing the API to the outside world.

### Lena

_How can error handling be effectively structured to maintain clean and maintainable code, especially when working with asynchronous operations like async/await or fetch in larger projects?_

As discussed above.

### Saleh

We are able to use both async/await and normal promises(.then). is it only a matter of preference or quality and performance?

This was aswered already last week:

> **Sanaz Zi**
>
> _Could you describe a situation where you might prefer using promise chaining (`.then()`) over `async/await`, and vice versa?_
>
> If you work on existing (perhaps older) code that uses `.then()` throughout it would be wise to maintain the same style. When you are writing new code `async/await` is preferred (but when working on a team project all team member must agree on a common approach).

### Lenin Del Río

_I still find it somewhat confusing to understand the differences between using `try/catch` and `then/catch` in JavaScript for error handling. Could you provide an explanation that clarifies these differences and when it is more appropriate to use each approach? I appreciate your assistance._

Both `.then()` and `.catch()` are methods that you can call on a Promise object. They are not available elsewhere. See the MDN web docs for more info:

- [Promise.prototype.then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
- [Promise.prototype.catch()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)

`try/catch` blocks can be used with `async/await` but already existed prior to the introduction of `async/await` in the JavaScript language for handling error in synchronous code. Nowadays you can catch both errors in asynchronous code as well as synchronous code. This is thanks to `async/await` making your code look like synchronous code.

### Sanaz Zi

_could you discuss the primary differences between synchronous and asynchronous API calls and their use cases?_

API calls made through network request are/should always be asynchronous as they will take some time (from a couple of milliseconds to hundreds of milliseconds). Synchronous network request (possible with the older `XMLHTTPRequest` function) will make the browser unresponsive while the network request is outstanding.

### Mohammed

_I've noticed that error handling can be handled within the `fetch()` function or in the calling function that uses `fetch()`._

- _What are the key distinctions between these approaches?_
- _And are there scenarios where we could handle errors within both fetch()and the higher-level calling function, for different types of errors?_

See the section [Error Handling in Web Apps](#error-handling-in-web-apps).

### Kadir Bozkurt

_When working with multiple asynchronous operations in a sequence, which one should be implemented: Using separate try/catch block or using only one try/catch blocks for all?_

You should only catch an error in places where it makes sense to recover from the error. Recovery in this sense could mean:

- reporting the error to the user (displaying a message in the UI, preferably in non-technical terms).
- substitute acceptable alternative default data for the missing data
- etc.

If, in a sequence of asynchronous operations, an operation depends on the successful completion of the previous operation and that operation fails then of course the sequence should not continue and remedial action taken instead.

### zehra kocairi

_I created two different promises as below and thought they worked the same way. I saw that the “catch” was triggered for the first promise but not for the second one. This seems quite interesting to me and I wonder why._

```js
new Promise((resolve, reject) => {
  setTimeout(() => reject('hey!'), 1000);
}).catch(alert);

new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error('hoops!');
  }, 1000);
}).catch(alert);
```

See folder `week2\zehra` and https://javascript.info/promise-error-handling#implicit-try-catch

### Liz García

_Why is it important to use try/catch blocks instead of .then/.catch for handling errors when making API requests or working with asynchronous code, as demonstrated in the main function of the second prep exercise?_

In practive you are free to use both forms but it is preferred not to mix styles within the same code base. In case of the prep exercise the objective was to learn try/catch, therefore I asked to use that.

### Enes

_In prep pokemon in main function we could use either then and catch or make it async and use try catch. Which one is better , what is the advantages?_

This is a matter of personal preference. `async/await` is newer and you won't find it in older code.

### Marley

_When declaring async functions, is it a matter of coding style when choosing between regular functions and arrow functions? or are there advantages of choosing one over the other?_

It is a matter of coding style. Note that function declarations are hoisted, which allows you to call a function that is defined later in the same file. Function expressions (regular functions or arrow functions) assigned to a `const` should be declared before they can be called.

The important thing is to pick a style (personal preference or agreed team style) and stick to it throughout your project.
