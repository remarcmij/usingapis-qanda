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

### Promises

#### Definition from Ben Lesh

- Read-only view to a single future value
- Success and error semantics via .then()
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
