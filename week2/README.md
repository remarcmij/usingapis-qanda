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
