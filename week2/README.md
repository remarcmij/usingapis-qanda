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

- Revisit homework week 1

  - Promises: review (ex3, ex4, ex5)
  - Revisit Promise.all, .race etc

- Prep exercises student solutions:
  - Catwalk async/await
  - Fetch try/catch
- Catwalk re-refactored
- Async/await examples
- Fetch/CORS (live-code)
- JSON (`json.ipynb`)
- Revisit "cancel promise"

Break at 13:15

- Go through questions

### Promises

#### Definition from Ben Lesh

- Read-only view to a single future value
- Success and error semantics via `.then()`
- Not lazy. By the time you have a promise, it’s on its way to being resolved.
- Immutable and uncancellable. Your promise will resolve or reject, and once only.

## Questions

### Nida Ul Zafar

A [website](https://www.nobelprize.org/about/developer-zone-2/) mentioned that their REST based API provides the results as JSON or CSV. while future format will be JSON-LD.)

what is the difference between JSON and JSON-LD?

> More info: <https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data#search-appearance>

Second question:

Below is the code i learned from codecademy. If the response is ok then error line will not execute. My question is why does the error line not execute after the if block since there is no else before throw new Error. Is ‘else’ implied here?

```js
if (response.ok) {
  return response.json();
}
throw new Error('Request failed!');
```

### Aleksei Kuznetsov

How can I send a fetch request with cookies (fr instance for authorization)?

> An HTTP cookie (web cookie, browser cookie) is a small piece of data that a _server sends_ to a user's web browser.
>
> See: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies>

### Vladimir Seredinin

Hello,
How to render an image which we got from the server side at a client side?

### Mohamed Ebada

kindly can you give use more explanation a bout catch and handling the error

### Wael AbuRayya

Hello,
to convert from ( then and catch ) into
( async/await, try and catch ), I had to move the code from then ( in code block 2 ) into the inside of the try block ( the line: document.query... in code black 1) without using await anymore.

1. Is this the correct way to replace then?
2. and what if we had several then calls?
3. and what if an error happens within these specific lines? would catch still catch them?

```js
// 1:

async function fetchData() {
  try {
    const fetchedData = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=e4f76d8324c52e04224f07a8daf47741'
    );
    const parsedData = await fetchedData.json();
    document.querySelector('#container').textContent =
      parsedData.weather[0].description;
    return parsedData;
  } catch (error) {
    alert('Error :' + error);
  }
}

fetchData();
```

```js
// 2:

fetchData().then((myJson) => {
  document.querySelector('#container').textContent =
    myJson.weather[0].description;
});
```

### Elif Nur Kalkan

Hello, We use catch methods for getting the errors if it occurs. Why do we also need to throw an error? I could not fully understand error handling.

### Asiye Gokalp

Hello,
While JSON data is being uploaded by using 'fetch()' how can we build the headers part?

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    //...
  },
  body: JSON.stringify({ title: title, body: body }),
});
```

### Nuha Azazi

1. Do we always assign a variable when we use await?

2. How do we reject error in the try catch?

3. Do developers in companies that use private APIs can see my personal data?

### yusuf demir

Hi

```js
async function myFunc(){
   try{
      cons data = await func1()
      return data
   }
   catch(error){
      return error //?
   }
}
function main(){
   myFunc()
   .then(\\...)
   .catch(\\..)
}
```

In this scenario, can we catch error (which comes from async func) after "then" in main function?
