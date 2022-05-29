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

Yasemin:

@Fadi Naddaf did you watch Stas' video about fetch <https://hackyourfuture.github.io/study/#/the-internet/fetch> from this week's reading materials? You can find the answer to your Q2 there.

answer tor Q6:The simplest use of fetch() takes one argument — the path to the resource you want to fetch. So instead of this

```js
function searchShow(query) {
  const url = `http://api.tvmaze.com/search/show?q=${query}`;
  fetch(url);
}
```

you can use this

```js
function searchShow(query) {
  fetch(`http://api.tvmaze.com/search/show?q=${query}`);
}
```

you can write the URL or the path directly inside the fetch

### Clement

Why we can’t fetch data from the API is way { "https://pokeapi.co/"}, without specifying the data this way {"https://pokeapi.co/api/v2/pokemon/?limit=5"} or this way

```js
const count = 10;
const apiKey = 'DEMO_KEY';
const apiUri = `https://api.nasa.gov/planetary/apodapi_key=${apiKey}&count=${count}`;
```

I am think we can fetch data this way const apiKey = "https://pokeapi.co/"; and then make use of the apiKey to target the data we need within the data api, it turn out i’m wrong, and then why?

```js
const fetchData = () => {
  fetch('https://pokeapi.co')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
fetchData();
```

I try it but i got: TypeError: Failed to fetch
Why ?
And then thank you in advance

### Yasemin

Here are my solutions for the Prep exercise cat walk

<https://github.com/ysmnclsknnl/catwalk/tree/cat-walk-async>

and Pokemon

<https://github.com/ysmnclsknnl/catwalk/tree/main/pokemon>

### Ali

Is it a good practice to generate an API key? What should we pay attention to when generating API key? Thanks in advance.

### Serva

My questions are about homework, will ask during the session if it's allowed.

### Filimon

- Why is fetch better than Axios?
- What are the disadvantages of fetch API?
