<!-- cSpell:disable -->

# Q&A Week 1

## Today's Agenda

- Welcome and intros

(Start recording!)

- Promise experiments

- Event loop experiments in the browser debugger

- Go through questions

- Prep exercise: Cat Walk

- Cat Walk using callbacks ([Continuation Passing Style](https://bessiambre.medium.com/continuation-passing-style-patterns-for-javascript-5528449d3070))

- Cat Walk callback hell

More event loop videos:

- <https://youtu.be/eiC58R16hb8?si=NESGMiIrCvNFrEjT>
- <https://youtu.be/cCOL7MC4Pl0>

## Promise evolution

- 2011 jQuery 1.5 `deferred` promise-like object, e.g. `$.get()` Ajax call: <https://api.jquery.com/category/deferred-object/>
- 2012 Promise/A+ specification: <https://promisesaplus.com/>
- q, Bluebird: Promise libraries
- ES2015 native `Promise` support
- ES2017 native `async/await` support

## Questions

### yousra

How can you handle errors in a promise chain

### Mustafa Durmus

Is it better to handle a Promise using then and catch functions inside the function that returns the Promise, or should you handle it after calling that function?

### mahtab mardani

I understand that both setTimeout and setInterval are used for managing asynchronous operations in JavaScript. Could you explain the exact difference between these two and in what scenarios each should be used for handling asynchronous tasks? (edited)

### Hanna

Please explain the chaining code below. If we want operations to execute one after another, why do we use asynchronous operations in the first place? In normal control flow the code would be executed from top to bottom, so why do we have to complicate things with .then()?The screen capture is taken from learning materials (edited)
image.png

### Ozlem Karaboga

How can developers prevent 'Promise' from entering the 'Rejected' state during asynchronous tasks and effectively manage this situation?

### Mustafa Sarıtaş

When we receive a Promise and it is fulfilled, we handle the response with response.json() inside the then() function. However, sometimes we use response.text() inside then() instead. What determines our choice between these two methods?

### Mustafa Durmus

Dear
@Hanna

I didn't quite understand the first part of your question, but I do have an idea for the second part. When a promise reaches a ready state, it either resolves or rejects. As you know, this must be handled by the then() function to access the data. In this case, the promise returns a resolve, which should be handled by the then() function.
The first then() handles the initial promise, and you can use its data within the second then(). The second then() also returns a promise. If you want to use the value from the second then(), you'll need to handle it with a third then(). Otherwise, you won't be able to access the data from the second then().
The benefits of chaining then() are:
Each then() allows you to handle the result of the previous operation and pass the processed result to the next operation. This is useful for performing a series of dependent asynchronous tasks.
It makes the code more readable and easier to maintain, as each then() handles a specific part of the workflow.

### Mustafa Durmus

Dear
@Mustafa Sarıtaş
I'd like to share some thoughts on your question. When we receive a plain text file as a Promise<Response> from an API request, we can handle it by using response.text() inside a then() function. This method resolves the data as a string, so we need another then() to handle the Promise<String> and use the data effectively.
Similarly, if we receive data in JSON format as a Promise<Response>, we handle it using response.json() inside a then() function. This method resolves the data as a JavaScript object, so we need another then() to handle the Promise<any> returned by json() and use the data appropriately.

Moayad Mohammed - Ashabi
18 hours ago
How can asynchronous code be effectively unit-tested considering the nature of callbacks and the dependencies on external content?

#### Answer

Example with fetch: <https://www.leighhalliday.com/mock-fetch-jest>

How does the Event Loop handle situations where multiple asynchronous operations with different priorities (e.g., I/O bound vs. CPU bound) are triggered concurrently?

### Mustafa Durmus

Hello
@Moayad
I've got a couple of thoughts on your second question about the Event Loop. Since JavaScript operates as a single-threaded language, managing the call stack is crucial to avoid introducing multi-threaded tasks. Asynchronous operations like setTimeout() or keyboard events are handed off to Web APIs for processing, which operate in a multi-threaded environment. Once these tasks are completed, they're placed in the callback queue, following a first-in-first-out (FIFO) structure.
Then comes the role of the event loop: it continually checks if the call stack is empty. When it is, the event loop picks the first "ready task" from the callback queue and pushes it onto the call stack for execution.
This mechanism ensures that asynchronous tasks are executed efficiently without blocking the main execution thread.

### Ali Ibrahim

How can promises help mitigate callback hell?

### Abdulaziz Sığar

What is a RESTful API and how to use it in a web application? Also, what are the key components of a RESTful API?

### M.​Hajjar

Is it safe to use a public API's and can we use it as long it's public? , or we should always consider different factors?
