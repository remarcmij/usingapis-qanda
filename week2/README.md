<!-- cSpell:disable -->

# Q&A Week 2

## Today's Agenda

(Start recording)

- How was your week (study, homework)?
  - Promises: review (ex3, ex4, ex5)
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

### Promises

#### Definition from Ben Lesh

- Read-only view to a single future value
- Success and error semantics via .then()
- Not lazy. By the time you have a promise, it’s on its way to being resolved.
- Immutable and uncancellable. Your promise will resolve or reject, and once only.

Q&A: see below

## Questions

### Fadi-Naddaf

Q1: Where it will saved the client data in my app?
for example: when the client signed up, so where his data will be saved to remember him for the next visit and also how I can grabbed his data to add it to his personal page?

Q2: in an app of movies after you select the type of movie you want to watch which is an Action move and there is a search label and when you start typing it start giving you a suggestions.
for example you type D, it start showing you an array of the a list moves started by D "Die hard, Doctor strange, Dairy of the Dead". So how to do this thing?

See: <https://youtu.be/jiJJ2V8K1ik>

Q3: If I fetching a data from 2 or more different site and the second fetch is finished before the first, so is it will displayed before the first or it will be awaiting for the first to be finished?

Q4: In the example bellow
A: Why we add 'no-cache' as second argument?
B: Why we throw an error function even we have an error inside the fetch function?

```js
.fetch(endpoint, {cache: 'no-cache'}).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('request failed!');
    }, networkError => {
      console.log(networkError.message)
    })
```

Q5: How to add an EventListener.
Example: when we registered in some website or an app we can use the mouse to click on the submit button or we can just click Enter in the keyboard.

Q6: In the example bellow why we store the url in variable?

```js
function searchShow(query) {
  const url = `http://api.tvmaze.com/search/show?q=${query}`;
  fetch(url);
}
```

can't we write it like this direct?

```js
function searchShow(query) {
  fetch(url) = `http://api.tvmaze.com/search/show?q=${query}`;
}
```
