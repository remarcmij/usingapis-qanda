<!-- cSpell:disable -->

# Q&A Week 2

## Today's Agenda

(Start recording)

- How was your week (study, homework)?
- Topics in week 2:
  - async/await
  - try/catch
  - web APIs
  - fetch
  - JSON
- Prep exercises student solutions:
  - Catwalk async/await
  - Fetch try/catch
- Catwalk re-refactored
- Async/await examples (`async-await.ipynb`)
- Fetch (`fetch-livecode`)
- CORS
- JSON (`json.ipynb`)

Break at 13:15

Q&A: see below

## Questions

### Mo

Q: why do throw an error call back function after the first success call back, even-though we throw an error inside the success function?

```js
fetch(endpoint, { cache: 'no-cache' })
  .then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    },
    (networkError) => {
      console.log(networkError.message);
    }
  )
  .then((jsonResponse) => {
    renderResponse(jsonResponse);
  });
```

### Ali

Q: Do we have to check HTTP response statuses if we already have our `fetch()` in a trycatch block? Wouldn't catching the error be enough? Also if we do have to check the status, how many should we check for? Is it a good idea to just check if we got status 200 and consider anything else as failure to save time?

### Edward

Q: With the try/catch pair, why would we still use ‘throw error’? Since catch allows us to determine what happens when an error occurs within the “try” block, can’t we just log the errors there? or are there any specific uses for having a throw new Error

### Furkan (not present)

Q: After getting a data with fetch operation, will we still connected to api or do we disconnect automatically?

### Lynn

Q1: What are API documentation templates that are commonly used?

Q2: What are the main downsides of using asynchronous methods compared to synchronous methods?

### Suleyman

Q: How much should we focus on XMLHttpRequest? Should we write any request with it or should we write everything with fetch right now? Is just to know what it is enough for this module?

### Serdar

Q: `fetch(endpoint, {cache: 'no-cache'})` Why should we add ‘no-cache’ as second argument? Anything related with how APIs work?

### Radhi (not present)

In an async function, it is generally used await inside it. Does it mean that the lines used await keyword runs synchronously inside the async function but the async function itself runs asynchronously between other functions? What if we don’t use await keyword?
