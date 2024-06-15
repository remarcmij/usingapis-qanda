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

Week 3: Project

1. Async/await experiments
2. Catwalk async/await prep exercise
3. Error handling discussion
4. Pokemon fetch try/catch prep exercise
5. JSON experiments
6. Fetch/CORS experiment
7. Go through questions

Break at 13:15

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

## Questions

### M.​Hajjar

how can we solve the error that comes from CORS origin as you can see in the image, I have used A third-party access such as https://thingproxy.freeboard.io or heroku but that seemed like a temporary solution because the third party will limit your number of requests, could you explain what is going on here and is there another way/ways to prevent this error?

### Mustafa Sarıtaş

What are the fundamental differences between Fetch API and traditional XMLHttpRequest, And
What common errors might we encounter when using Fetch API and how can we resolve them?

### yousra

now I can fetching data from API by many ways XMLHttpRequest, Axios,async/await, how I decide which method I must to used,

XMLHttpRequest is old way , but Axios ,async/a wait They are both nice and gave the same results, but what is better between them?

### Ali Ibrahim

is there any different between” Async/await and.then”

which one is better to user and why ?

### Ozlem Karaboga

What are the advantages and disadvantages of throwing an error directly to the outside when an error occurs in an async function instead of catching it and handling it?

### Mustafa Durmus

My question is : In my async function that returns a promise, I use a try-catch block to handle promise rejections. If the catch block can already handle rejected promises, what is the specific purpose of explicitly throwing an error inside the try block? please have a look at below image.

### Hanna

What can be the relationships between API and users? I know only client-server, - are there any other ones?

When a server receives multiple requests simultaneously, how does it handle them? Can it get blocked from overload? Does receiving multiple requests influence the time of the response?

How do i know the the API is good quality, and doesn't send some malicious information (viruses) as a response?

### mahtab mardani

What is the difference between async/await and then/catch in JavaScript? Which one is more commonly used in real-world projects, and why?

### Abdulaziz Sığar

Can I use more than one API in a project?

### Moayad Mohammed - Ashabi

what could be an issue if we call different APIs sequentially?

For example fetching user information for current location in weather app and another to fetch the weather information for your location
