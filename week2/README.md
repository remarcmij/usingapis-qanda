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
7. Go through questions

Break at 13:15

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

## Questions

### Ibrahim Sahin

_1-) is there any use case of async/await other then fetching data._

Whenever a (library or homegrown) function returns a promise you can use `async/await`. You will encounter more use cases in next module (Node.js), e.g., when working with files and databases.

### Rustam

_what is more preferable, using await promise or promise.then?_

For new projects `async/await` generally is more intuitive as it resembles synchronous code. For existing older project that uses `.then()` throughout, stick to that for consistency. But ultimately, if you work in a team, it's a tema decision.

### Mustafa Turkyilmaz

_Convert promise to json. Is it always possible with "then"?_

Question needs clarification.

### Ahmet Dogan

_Can we use try/catch inside a promise?_

```js
try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    resolve (response.json());
} catch (error) {
  reject new Error(`Error fetching data: ${error.message}`);
}
```

_if so which way is better using if/else:_

```js
// const response = await fetch(url);
// if (response.ok) {
//   resolve(response.json());
// } else {
//   reject(new Error(`HTTP error! status: ${response.status}`))
// })
```

_or try/catch?_

### Hailemariam Tsigabu Gebreyohannes

_What are CORS (Cross-Origin Resource Sharing) policies, and how do they affect fetching data from external APIs?_

When fetching data _programmatically_ from a remote origin that differs from the requesting origin the browser will check whether the remote origin has specially allowed for this through the `Acces-Control-Allow-Origin` header. If not present not permissive the browser will return an error instead of the requested data.

See: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin>

### Rasha Alsh

_When can we use promise.race?_

The easy answer is _whenever you like_. I have never found a practicl use for it myself. But check `promise-race.js` in the `week2` folder in this repo for an example usage.

### Mohammed Gumaan

_What's the relationship of Async/Await with JavaScript event loop, is it the same as Promises or does it beg to differ in case of performance and other significant matters?_

`async/await` is a more modern alternative for `.then()/.catch()`. It still uses promises behind the scenes and is does not change the way how promises are handled at the event loop level.

### Lidya Tesfamariam

_How can we avoid deadlocks when we are using async/await._

Since JS is a single-threaded language it cannot deadlock. A deadlock can only happen when multiple threads compete for exclusive access to a shared resource.

### Bereket

_While the Fetch API is generally preferred for making HTTP requests in modern JavaScript applications, However are there still some scenarios where XMLHttpRequest (XHR) might be chosen over the Fetch API?_

A scenario that comes to mind is if you want to monitor progress during an ongoing network request that is expected to require an extended time.

See: <https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/progress_event>

### Hana Hulic

_Do we need to .map every time we use fetch?_

No, these two are not functionally connected. Use `.map()` to map elements of an array to a different form. Use `fetch` to fetch data, whatever its representation.
