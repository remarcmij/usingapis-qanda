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

0. Assignment week 1 ex2
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

### Oleksandr Starshynov

Hello. I have honestly read all the information available to me about CORS. I understand the mechanism itself, how it works. It seems that I even understand the purpose of using this method. But I can not say for sure that I understand. Why do we need CORS if we work with parts of one system and, in fact, the browser sees whether the part of the system is communicating with it or not? Looks like no way for browser to know if he works with the part of his system or no.
I hope my explanation make sense.

### Ilyas Khugaev

When handling errors with `try...catch`, if I already use `console.error` to log the error, is there still a good reason to throw it again right after? I'm trying to understand when it's necessary to re-throw an error versus just logging it

### Ahmad Zetouny

I’m still a bit confused about error handling in `.then()/.catch()` versus `try/catch`. When using Promises, we pass `new Error()` to the reject function `reject(new Error())`. But when using `try/catch`, we use `throw new Error()` to trigger an error. Is that correct? And is this the only difference between the two approaches when it comes to handling errors?

### Yana Seniuk

I also have this question about `catch`.
When I wrote a function, for instance,  function `fetchData(query)` and I wrote there throw error, catch and throw error from there, then I don't need to write it again on another functions to catch error?

Also question about fetch post. If I want to ask something by using API OpenAI , should I use post method in fetch?

### Ilia Bubnov

I would like to ask about this error that I am always getting with async/await :

```text
 ShowOneChild.js:18 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'getWithTTL')
    at ShowOneChild.readRenderPromptFromStorage (ShowOneChild.js:18:1075)
    at ShowOneChild.getRenderPrompt (ShowOneChild.js:18:1296)
    at ShowOneChild.render (ShowOneChild.js:18:1719)
    at HTMLDocument.\<anonymous> (content-script-idle.js:18:58)
    at j (jquery-3.1.1.min.js:2:29948)
    at k (jquery-3.1.1.min.js:2:30262)
```

I tried to read more about it, but some of the description is too complex for me to comprehend.
Another question that I have is about when should the function be async ? I'll go deeper to explain the question since it sounds like i don't understand the async/await functionality (spoiler: I do). For example, when I have multiple async functions that I want to execute inside of main() I would then have to make async function main() which looks to me as an unnecessary thing. I know that a lot of things with fetch() rely on eventListeners , but when I am writing an app that has to be executed on load, I would still do it like window.`addEventListener('load', async () => await main())`, is this the only (correct) way?

### Nikita Stefanchuk

I often see people just doing `return response.json()` after a fetch call, without checking if the response was actually successful (without checking `response.ok`). Is that a bad habit? What kind of problems could that cause in real scenarios?
