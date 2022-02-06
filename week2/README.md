<!-- cSpell:disable -->

# Q&A Week 2

## Today's Agenda

- How did the homework (week 1) go?
  - Revisit promises from week 1 (`promises.ipynb`, `bullet.js`)
- What new topics did you learn this week?
  - async/await, try/catch, fetch API, JSON, xmlHttpRequest, GET and POST methods
- Async/await examples (`async-await.ipynb`)
- Refactor cat walk with `async/await` (again)
- Fetch (`fetch-livecode`)
- CORS
- JSON (`json.ipynb`)

Break at 13:15

Q&A: see below

## Q&A

### Christina (Yash)

**Q1:** _Hey everyone, my question is regarding ex1 of week2 homework. When I tried to write the following function as an arrow function, the npm test failed to recognize the async function. I'm not sure if that happened because of the way the test file was written or there is something more to it?_

**A1:** Yes, the unit test expects a function declaration instead of an arrow function. Normally unit tests should not be concerned with such implementation details, i.e. whether a function is defined using a function declaration or as an arrow function. The unit tests for the homework however are designed to give warnings about possible implementation errors (for educational purposes). In this case the unit test did not cater for the possibility that the function declaration was changed into an arrow function as the instructions ask you to complete the function rather than to change the way its declared. From the point of the exercise (and its unit test) it is an uncalled for, unnecessary and evidently breaking change. I would recommend that you revert back to a function declaration so that the unit test passes.

> When making changes through a PR to a repo that is not your own, you are well advised to restrict yourself to just the required functional modifications. Don't make changes to code that does not need changes simply because you perhaps don't like the style or something like that. You may break things and/or provoke WTF comments from the code owner/reviewer (who may decide to reject your PR for that reason). _Just to be clear, this was **not** the case here_.

**Q2:** _When we need to have chained asynchronous functions, which method is better .. to use .then or use await before calling the async function?_

**A2:**

### Danijel (Yash)

**Q1:** _At what point should we check/ catch errors when using fetch() and similar async functions. Sometimes I see a fetch wrapped in a try/catch or a .catch() at end of its Promise, but other times the fetch just returns response.json() and lets the calling parent function deal with any errors:_

```js
const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

const fetchData = async () => {
  // Error check in this function
  try {
    const res = await fetch(url);

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const main = async () => {
  const data = await fetchData();
  console.log(data);
};

main();
```

vs

```js
const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

const fetchData = async () => {
  const res = await fetch(url);
  return res.json();
};

const main = async () => {
  // Check for errors here
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log('Something went wrong');
  }
};

main();
```

**A1**:

### Said

**Q1:** _In the example code piece, while we have `catch` for errors, why new Error is thrown?_

```js
...
try {
    const data = await fetchData();
    console.log(data);
    if (data.pokemon) {
      throw new Error('some error message')
    }
  } catch (error) {
    console.log(error);
  }
...

```

**A1:**

### Ahmed

**Q1:** _After learning async/await , should we ignore or forget using promises and just use async/await or there are cases we must use them ?_

**A1:**

### Lydia (Yash)

**Q1:** _Is fetch only for api (external Or internal) but if we won't use api we can use normal promise ?!_

**A1:**

**Q2:** _I am still confused with debugging how I can choose where to put breakpoints ?!_

**A2:**

### Mustafa (Yash)

**Q:**

1. _What's the difference btw promise.all and promise.race?_
2. _And is it recommended to load data from the disk on functions as loading: (books) for example!_
3. _And is using Regex a good way to load the data in same format with all the break-lines?_
4. _Also can we call Async method from Sync one?_

**A:**

### Mohamed

**Q1:** _Hello everyone, I want to know why shall I parse from JSON to javascript however, JSON stands for Java script object notation??_

**A1:**

### Caglar

**Q1:** _Inside code below, although there is a catch block, why do we throw a new error object inside try block? Isn't catch block enough to catch all errors?_

```js
const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint', {
      method: 'POST',
      body: JSON.stringify({ id: 200 }),
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
    throw error;
  }
};
```

**A1:**

### Abdulrahman (Yash)

**Q1:** _What is the different between sequntal and parallel request ? and can we have example about them ?_

**A1:**

### George (Yash)

**Q1**: _I don't have questions but I have difficult to find APIs, there is a good website for APIs ?_

**A1:**

### Osama (Yash)

**Q1:** _As we can see in the diagram of making XHR Get Request why we process the handler response before opening and sending a request?_

```js
function fetchData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status <= 299) {
        resolve(xhr.response);
      } else {
        reject(new Error(`Network error: ${xhr.status} - ${xhr.statusText}`));
      }
    };
    xhr.onerror = () => reject(new Error('Network request failed'));
    xhr.send();
  });
}
```

**A1:**

**Q2:** _Why we do convert a value to a JSON string and then we send the data to a server as we can see in the diagram bellow. I didn't get the idea of doing that!_

**A2:**

**Q3:** _it's not really clear for me why we use "setRequestHeader" when we are doing XHR Post Requests_

```js
xhr.setRequestHeader('apikey', apiKey);
xhr.setRequestHeader('Content-type', 'application/json');
```

**A3:**

### Daniel

**Q1:** _In the online class we learn to fetch from API we need Step 1. response.json(), 2. get data 3. catch error. I know what I need to do, but could you tell me what response.json() is?_

**A1:**

### Alexander

**Q1:** _I know it won't count as a valid question, but what exactly is the headings in POST request?_

**A1:**
