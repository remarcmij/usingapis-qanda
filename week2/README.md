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

Exercise ex2 output order

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

### Lidya T

Q: Even though Fetch API is the preferred method for HTTP requests in JavaScript, are there any cases where XMLHttpRequest (XHR) offers advantages?

A: With `XMLHttpRequest` you track progess of (large/huge) uploads and downloads (e.g. show a progress bar). This is not natively supported by `fetch()`.

### Volodymyr Korotun

Q: Hello. My Q. When we work with functions, we can use the async - await syntax and wait for the promise to be fulfilled or reject. also when working with promises we can use methods to process them, something like try.. catch and then ... catch. Which method better and how we can understand which method is better to use and when. Thanks

A: The `try/catch` construct is needed to handle errors when using `async/await`. When using `await` on a promise, an error is thrown when the promise is rejected. This error can then be caught and handled by a `catch` block.

In short, if you use `async/await` you must use `try/catch` to handle promise rejection. If you use `.then()/.catch()` methods you do not need `try/catch`. For new applications, `async/await` is generally preferred.

### Samira

Q: How can we handle CORS errors when working with third-party APIs?

A: You cannot bypass CORS through JavaScript in the browser. It is the browser that checks and enforces CORS when attempting network requests. You can however create your own backend that act as an intermediary to make the request on the behalf of your frontend and passes back the response. (Note that this will not work for the project of week3 because you will not be writing your backend).

It is possible to use a browser extension to bypass the browser's CORS check, however this is not something you can ask customers of your application to do.

### Sertan Erdogan

Q: Which features should we look for before using an API and fetching the data from that?

A: For the UsingAPIs project (week 3) you need to find an API that has no CORS restriction. Some public API also restrict the number of network request you can make per unit of time (e.g. 60 request per hour for the GitHub API). This is called rate limiting. When working on and debugging your project you will make many requests per unit of time, so make sure that this does not bite you.

Q: How can we handle multiple fetch request if we want multiple data for our app? Is this also affect our performance and what can we do about it?

A: If the network requests can be done independently then you can make these requests in parallel and wait for the responses using `Promise.all()`.

If a network request depends on data from a previous request then you need to do them sequentially, e.g. in a promise chain.

### Konjit

Since SPAs(Single Page Applications) rely heavily on JS running  in our browser doesn't that introduce security risks for example  when storing  data like credentials for authentications  in localStorage? Also given the frequent API requests made by SPAs, how can we prevent security issues during communication with those APIs like API leakage, Man in the Middle Attack? (edited)

A: This is topic is covered in the next module: NodeJS. But briefly:

Q: Credentials (e.g. user name, password) should never be stored in `localStorage`. Instead you can store a token that the backend provides after signing in. You can, for instance, sign in using user name and password. For this to be secure the backend should use encrypted communication, i.e. HTTPS. The provided token can be stored in localStorage and expires after a predetermined time. The token must be sent along with each request (usually in a request header) to authenticate the request. This again should use HTTPS for extra protection.

Note that the token is encrypted in a one-way fashionand signed by the backend:

1. You cannot reconstruct user name and password from the token.
2. You can not tamper with the token as this will invalidate the signature that the backend checks.

Have a peek at week 3 of NodeJS where this is covered in detail here:

- <https://github.com/HackYourFuture/Node.js/blob/main/week3/prep-exercise/README.md#client-optional>

### Hossein Shokri Kelisa

Q: What is ReadableStream in Fetch, and when should we use it?

A: I have never used this, so I asked GitHub Copilot. Here is its response:

ReadableStream in the Fetch API represents a readable stream of byte data. It allows you to handle streaming data in a more efficient and controlled manner. This is particularly useful for handling large responses or for processing data as it arrives, rather than waiting for the entire response to be downloaded.

Here's an example of how to use z with the Fetch API:

```js
fetch('https://example.com/largefile')
  .then(response => {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let result = '';

    function read() {
      reader.read().then(({ done, value }) => {
        if (done) {
          console.log('Stream complete');
          console.log(result);
          return;
        }
        result += decoder.decode(value, { stream: true });
        read();
      });
    }

    read();
  })
  .catch(error => console.error('Fetch error:', error));
```

In this example:

1. `fetch` is used to make a request to a URL.
2. `response.body.getReader()` gets a `ReadableStreamDefaultReader` that allows you to read the stream in chunks.
3. `TextDecoder` is used to decode the byte data into a string.
4. The `read` function reads chunks of data from the stream and appends them to the result string until the stream is complete.

This approach allows you to process data incrementally as it arrives, which can be more efficient for large responses.

> See also `github-app` example in this repo.

### Salih Furkan Kara

Q: I’ve heard that caching API responses can improve my app’s performance by reducing the number of requests made to a third-party API. What are the best ways to store this cached data, and how can I make sure it stays up to date without making too many unnecessary requests?

A: You can cache responses locally, e.g. in a JavaScript object (see GitHub examples) or, more permanently, in localStorage. However, there is always a risk of the cached data becoming "stale" (i.e. no longer matching the most recent data from the API). You can also use a caching library which supports TTL caching (Time To Live), which invalidates cache nodes after an experiation time. However you still cannot completely eliminate cached data becoming stale.

<https://www.npmjs.com/package/@isaacs/ttlcache>

### Feras Al-Demashki

Q: Hello,  how does the Oauth authentication work , and what is the content in the header when sending a POST request

A: OAuth is out-of-scope for this module (ask again in the NodeJS module, week 3). But briefly, it involves the use of a third-party service for authentication. Upon succesful authetication the third-party service provide a token that can be used to access protected resources from the target web API.

The request header usually contains the access token which the backend uses for granting authorization.

Example: <https://github.com/HackYourFuture/Node.js/blob/main/week3/prep-exercise/client/src/pages/homePage.js#L40>

### Khiro A

Q: What are the differences between the authentication methods that used in the APIs ? What is better choice API keys or Oauth ?

A: This topic is out-of-scope for this module (ask again in NodeJS module).

### Rizan ibrahim

How can you set custom headers in both fetch() and Axios?  What are the advantages of using Axios over fetch()? (edited)

### Glib S

Q1: What if we deal with fetching data that is constantly updating (stock prices, or some other dynamic data that can change at any moment)? Calling fetch every second or minute seems like intuitively correct approach, but if data has not changed during this period, we just make huge amount of redundant calls. What is the best way to handle such scenarios?

Q2: I faced a problem while trying to use forEach with async functions. For some reason, for...of works as expected, while forEach returns a quite different result. Why is that?

```js
// 👇 'for of' approach (works as expected):

async function logWithDelay1() {
    console.log('Start of function');

    for (const el of [1, 2, 3]) {
        await new Promise(resolve => setTimeout(() => resolve(el), 1000));
        console.log(el)
    }
  
    console.log('End of function');
}

// 👇 'forEach' approach. (doesn't work as expected)

async function logWithDelay2() {
    console.log('Start of function');

    [1, 2, 3].forEach(async (el) => {
        await new Promise(resolve => setTimeout(() => resolve(el), 1000));
        console.log(el);
    });

    console.log('End of function');
}
```

A1. This is out of scope for this module (perhaps ask again in the NodeJS module). But briefly, if you are in control of the backend (i.e., the API) you can use [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) to push updates from server to client at the moment those updates occur.

A2. See example `glib.js` in `cohort51` folder.
