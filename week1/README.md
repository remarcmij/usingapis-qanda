<!-- cSpell:disable -->

# Q&A Week 1

## Today's Agenda

(Start recording!)

- Welcome

- Prep exercise: Cat Walk

  - What do you think the advantages are of having the constants in the global scope? Are there any disadvantages?
  - To make the code loop we cannot use a standard JavaScript loop (`for` or `while`). Why is that?
  - Do you feel this version is easier to read than the version you made in the Browsers module?
  - Is this version more efficient or not or does it not matter?

- Promise experiments

- Event loop experiments in the browser debugger

One break around 13:15.

- Go through questions

- If time left: Cat Walk using callbacks

Advanced Event Loop video: <https://youtu.be/cCOL7MC4Pl0>

## Promise evolution

- 2011 jQuery 1.5 `deferred` promise-like object, e.g. `$.get()` Ajax call: <https://api.jquery.com/category/deferred-object/>
- 2012 Promise/A+ specification: <https://promisesaplus.com/>
- q, Bluebird: Promise libraries
- ES2015 native `Promise` support
- ES2017 native `async/await` support

## Questions

### Kumait Mustafa

_Couldn’t we quite often use async/await where Promises would be used?_

### Rama

_How can I optimize the performance of the dancing cat animation to ensure smooth transitions between walking, dancing, and walking again, especially on devices with lower processing power or slower network connections?_

### Lena

1. _In what situations would you recommend using promises, and when would you prefer using callbacks?_

2. _I understand that promises offer better error handling with the catch block. Could you explain how this error handling mechanism works in more detail?_

### Mohammed

I noticed that errors in promises can be handled using two different approaches:\_

`.then(onSuccess, onError)`  
_or_  
`.then(onSuccess).catch(onError)`

- _What are the main factors or considerations that would influence our choice between using one over the other?_
- _Or Is it only influenced by the structure of the incoming data or/and the functions being executed?_

### Sanaz Zi

_Could you describe a situation where you might prefer using promise chaining (`.then()`) over `async/await`, and vice versa?_

### Lenin Del Río

_It seems that promises are better than callbacks... In what scenarios would it be considered best practice to use callbacks?_

### Liz García

- _Are there scenarios where callbacks are still a preferred choice over Promises in modern JavaScript development?_
- _Could you please clarify the concept of APIs and How do callbacks and promises relate to APIs? I am still a bit unclear about this topic._

### Marley

- _In a situation where you encounter “callback hell,” how would you refactor the code to make it more manageable?_
- _In the context of career training for web development, how important is a deep understanding of asynchronous programming concepts, and what benefits does it offer for professional growth?_

### zehra kocairi

_I couldn’t really get the idea behind `finally`. I understand how it works but I couldn’t understand where we can use it._

### Kadir Bozkurt

_When I research the promises on the web, I always encounter of using them on getting data from a server or database. Are there any other different use cases in real life as a developer? For example we used in catwalk exercise but we already did it without promise previous week. Is the promise the better way to make this exercise and why?_

### Saleh

_What is your comments on chaining, I have noticed that we can chain several asynchronous operations but we will end up in the same scenario as "callback hell"._

### Enes

- _i often see people use `await fetch`, when i hover over fetch i see a promise part. what is the connection between them ?_
- _when we use `fetch` , daes it make promise itself ?_
