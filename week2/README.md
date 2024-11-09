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

1. Async/await experiments
2. Catwalk async/await prep exercise
3. Error handling discussion
4. Pokemon fetch try/catch prep exercise
5. JSON experiments
6. Fetch/CORS experiment
7. Week 3 Project
   - Example app with error handling and loading indicator
8. Go through questions

### Error Handling in Web Apps

- We generally talk about a _happy path_ and an _error path_ (or _unhappy path_) for your code.

  - The _happy path_ is the execution path through your code if all is well: no errors encountered.
  - The _error path_ is the execution path through your code if an error is encountered.

This section is about designing the _error path_.

- Ultimate goal is to inform the user of _anticipated_ application errors and, if possible, give options on how to gracefully recover from an error.
- Logging to the browser console is NOT equivalent to informing the user. End users do not routinely look for errors in the browsers console (developers on the other hand should always keep an eye on the console when developing for the browser).
- Handle the error in such a way that:
  a. The function that normally expects a valid response does not crash because it is getting error info instead of the expected data.
  b. The error is rendered to the page, preferable in user (non-technical) terms.
- You should not try and handle JavaScript runtime errors or application bugs (i.e. unexpected errors), such as trying to modify a `const` variable, etc. Such errors should be allowed to crash your program (with a stack trace) so that you (as a developer) get alerted to the problem early and can promptly fix it.

## Project

See: <https://github.com/HackYourFuture/UsingAPIs/tree/main/Week3>

Please note:

> The app needs to have loading/error handling for the interaction with the API and needs to show this to the user, not just a console.log.

## Q&A

### Lidiia Starshynova

Hello  @jim جِمْ  
Based on the web app code you provided us, I have a question. How does the data in the state object become updated? Thank you.

Answer: The initial state is defined in [app.js](./github-app/src/app.js). The state is updated through the logic in [reposPage.js](./github-app/src/pages/reposPage.js). This happens before and after fetching data and when handling UI events.

### Vlada Bessikalo

Hello. My questions are:

1. JavaScript has many built-in constructors for standard errors: Error, SyntaxError, ReferenceError, TypeError and others. In what situation can we use them all? Do we, as developers, need to anticipate all situations for these Errors?

    Answer: All standard errors, except `Error` itself are JavaScript runtime error that you normally don't throw yourself or want to catch and handle explicitly yourself. Usually, a runtime indicated a bug in your program that you need to fix, rather then trrying to catch it as you usually cannot recover from it programmatically.

    Errors that you throw yourself should either be instances of the standard `Error` object or an object derived from the standard `Error` object.

2. When is it more appropriate to throw an error versus return an error in a catch block?

    Answer: Those are not alternatives. What you `return` from a `catch` block does not become a new error. You can `throw` an error from a `catch` block but since the `catch` block, but since a `catch` block is a way to handle an error it is usually better to move the try/catch block higher up in the call chain, i.e. at the location that is the ultimate consumer of the data.

3. If we have an error, as we need to alert the user about this error, we can use the alert() function. What other options are there for alerting the user about an error?

    Answer: When is the last time you saw a respectable web site throw up an alert box to display an error? Error should be rendered in the page as HTML.

4. You used the util-folder in your project. Could you please explain what is the reason to separate logic into a separate util-folder?

    Answer: Basically for the same reason that I have placed JavaScript files dealing with pages into a `pages` folder and views in `views` folder: keeping similar files together in one place. The files in `util` are not pages or views but utility functions.

### Abdul kader

Hello my question is:
 I didn't understand JSON.stringify very well can you give an example about it please

  Answer: see [6-json](./json/6-json.js)

### Fady Saadeddin

compared to promises .. await is a bit confusing in meaning .. i understand promises as syntax when we use then and catch .. what  does  await mean with async function and where is used exactly ..

Answer: `await` is used to await a promise to become settled. If the promise is fulfilled, the `await` expression evaluates to the resolved value of the promise. It the promise is reject then await throw an error using the promise rejection value.

See: [await Description](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#description)

### Ruba Hasan

1.What is the difference between PUT and PATCH?
2.How can we improve the speed of fetching and displaying data in the browser?

### Liya Oz

1. I’ve heard it’s usually best not to mix .then() and await, but in this example, .then() seems to be helpful. Do you think this is a good approach, or would you rewrite it differently?

     ```js
    async function process() {
      const data = await getData();
      data.then(logData); // it runs in the background without blocking process()
    }
    ```

    Answer: Please explain what you think the code does and why you think this way is helpful.

2. Is there a way to cancel an async operation if it’s no longer needed (for example, if a user cancels an action like a file upload or navigates away)? I know JavaScript doesn’t provide built-in cancellation for async functions, but I found an option called AbortController that is used with APIs. Could you explain more about async code cancelation?
Ontzettend bedankt!

    Answer: you might be able to cancel an async operation, but not through a promise itself. A promise cannot be cancelled. But it can be ignored.

    An [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) to abort a `fetch()`. When a `fetch()` is aborted the promise returned by `fetch()` is rejected (which effectively settles the promise rather than cancelling it).

### Dalia Saeed

How can we handle CORS errors when working with third-party APIs?

Answer: From the front-end, you can't. You could install a browser extension to bypass CORS but that is not what you want to asks your customers to do.

### Alex P

How can I handle errors in a fetch() request in JavaScript, and what are some best practices for error handling with fetch()?

Answer: We will deal with this extensively during the Q&A.

### Esen Karataş

Why is it beneficial to use try/catch when working with async/await functions?

Answer: It is not beneficial: it is essential because we **_must_** handle errors.
