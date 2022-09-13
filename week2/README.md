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

Break at 13:15

### Promises

#### Definition from Ben Lesh

- Read-only view to a single future value
- Success and error semantics via .then()
- Not lazy. By the time you have a promise, it’s on its way to being resolved.
- Immutable and uncancellable. Your promise will resolve or reject, and once only.

Q&A: see below

## Questions

### Ghufran Thabit

My Question: is there cases where it is preferred to use .then than async/await?

### Sezgin

How can I run multiple async functions in parallel ?

- We have such a scenario.
- I want to send request to more than one server/api for one result.
- I want to send all these requests concurrently.
- I want to get result whichever server/api sends a positive response first.
- I create each request as an async function and run them all in parallel with promise.all.
- When one of the request functions fails, promise.all returns a single response for all requests, giving a reject result.

How do I solve this problem

### Beyza

Hello, my question is about the API key. Sometimes we are using the API key to use API. What is the good practice for hiding it from public?

Thanks in advance.

### Baraah Ranneh

Hello, my question is about http request. When should I use the http request method in API?

### Amer Barnawi

Questions:

1. If I want to use ( try / catch ), in which specific cases I can use it?
2. For example, in case I have this code:

```js
async function getData(url) {
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
// Piece of code..

async function main() {
  try {
    const myData = await getData(url);
    console.log(myData);
    renderData(myData); // myData: undefined
  } catch (err) {
    renderError(err);
  }
}
```

Do I need to use ( try / catch ) in the ( main ) function or I do not need it because I called the ( getData ) function and I used ( try/catch ) over there, so I can get the error message from there?

About using ( fetch ): is there a problem that can occur in the ( main ) function that is different from the kind of problems that can occur in the function ( get Data )?

I feel that I do not need to use ( try/catch) in the ( main ) function, and the error message will be the same in both ( main and getData ) because in the ( main ) function I call ( getData ) and ( fetch ) is there.

Thanks in advance.

### cynthia susana

can you please clarify the

```js
credentials, header;
```

fetch option why and in which cases we use them?

### Abdullah S

what are the disadvantages of using api on web applications?

### Mones Hamd

- in case we define source for img tag in DOM to fetch image from image folder , is it also http request ? i saw that it do request in network section in browser log .
- do we need to use async/await to fetch image to catch error in loading img ? , because also in case the image has big size and needs time to load .?

thanks

### Ashraf Alshashaa

Hi Mr. Jim, I can't understand the errors handeling in javascript I'd like you to explain to us about them

### İbrahim AKANÇAY

I have some problems with catching errors. After fetch definition we throw new Error and write inside it a error message. In try catch section do we catch this error message or another message from API?
