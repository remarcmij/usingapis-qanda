<!-- cSpell:disable -->

# Q&A Week 2

## Today's Agenda

- How did the homework (week 1) go?
- Topics in week 2:
  - async/await
  - try/catch
  - web APIs
  - fetch
  - JSON
- Prep exercises:
  - Catwalk async/await
  - Fetch try/catch
- Async/await examples (`async-await.ipynb`)
- Fetch (`fetch-livecode`)
- CORS
- JSON (`json.ipynb`)

Break at 13:15

Q&A: see below

## Questions

### Huseyin

Q1. What are the response types of fetch API ? What are they for ?
since I got below error I made a search and end up with a syntax like this

```js
fetch(request, { mode: 'no-cors' });
```

Tried this one and it allowed me to run fetch method without an error but I saw my response type is opaque. Didn't make sense to me. Thanks in anvance

### Burak

Q1. What should we pay attention to when pulling data from API's? How should we use the Youtube Data API, if we move on from an example? How do we implement this? What does resource cost mean?

Q2. What does the Status we get as a response mean when requesting from the API? For example, what does it mean for Status to be 200?

Q3. I don't understand exactly how we use await. When using Promises, we use then() method to execute the processes when the promises resolve. How does this work in await? I want the functions to be executed sequentially. So should I put await in front of it when calling functions? In order to use the await keyword, the function we put in front of await must be an asynchronous function?
Thank you

### Aykut\*

Q1.

```js
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(‘Network response was not OK’);
    }
    return response.json();
  })
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(’There has been a problem with your fetch operation:’, error);
  });
```

We use catch methods for getting the errors if it occurs. Why do we also need to throw an error if response.ok returns the falsy value like in this example. Doesn’t the catch method achieve getting the error here?

### Mohammed\*

Q1. When should I use fetch() with .then or async/await?
I think that it is only different approaches to work with async responses.

### Talha

To follow up on @Aykut ’s question: If we need to check for network errors in .then method, how can we implement it in async/await syntax?

### Ali\*

Q1. My question is : If I create a function in same app.js my api is working but if I import my data fetch function it is not working. I created a video for this. Could you please explain why it is not working.

### Ensar\*

Q1. is it possible to create a new promise just using async await structure without using a fetch or new Promise i.e. ?

### Onur\*

Q1. Using async/await is easier to handle the responses. Is there any difference about performance?

### Ertuğrul\*

Q1. We know that the Fetch API is modern JavaScript alternative to XMLHttpRequest, it also performs the same task, network requests. The Fetch API is also built into the browser, but not supported in every browser, especially the old browsers like Internet Explorer 7 and 8, if we want to work both old and new browsers what should we do?

### Sina

Q1. as I'm going forward in understanding API 's, I get that many of the properties and methods or even elements of DOM are actually API.so my question is that how big this circle is and what is not an API actually?!

Q2. XHR and fetch() are two ways to make http request with 2 different approaches, one with returning promise objects and one handling with event handlers , is there situations that using XHR is more usefull according to its data and events?

### Fedor

FETCH vs AXIOS ???
fetch is built-in - but more verbose :grinning:
axios we need to include into the app - but it is more straightforward

Q: (in browsers) is fetch a must-use, or do real projects use axios as well?
