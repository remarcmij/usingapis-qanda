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

### Lydia

Why does the fetch() API in JavaScript not automatically reject promises for HTTP response errors, but instead require explicit handling of the response status?

Answer by Microsoft Copilot:

Excellent question! The fetch() API in JavaScript does not automatically reject promises for HTTP response errors because it distinguishes between network errors and HTTP errors.

Here's a bit more detail:

Network errors: These occur when there is a failure to connect to the server (e.g., DNS issues, no internet connection). fetch() will reject the promise in these cases.

HTTP errors: These occur when the server returns a response with a status code indicating an error (e.g., 404 Not Found, 500 Internal Server Error). fetch() treats these as successful responses because the request did reach the server and the server did send back a response, even if it's an error.

By requiring explicit handling of the response status, fetch() gives developers finer control over how they want to handle different types of responses. Here's an example of how you might handle HTTP errors:

```javascript
fetch('https://api.example.com/data')
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
    console.error('There was a problem with the fetch operation:', error);
  });
```

In this example, we check the response.ok property, which is true if the status code is in the range 200-299. If it's false, we throw an error to be caught by the .catch block.