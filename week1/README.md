<!-- cSpell:disable -->

# Q&A Week 1

## Today's Agenda

(Start recording!)

- How was your (study) week?
- Prep exercise: Cat Walk
  - What do you think the advantages are of having the constants in the global scope? Are there any disadvantages?
  - To make the code loop we cannot use a standard JavaScript loop (`for` or `while`). Why is that?
  - Do you feel this version is easier to read than the version you made in the Browsers module?
  - Is this version more efficient or not or does it not matter?
- Promise experiments
- Event loop experiments

  One break around 13:15.

- Go through questions

- If time left: Cat Walk using callbacks

Advanced Event Loop video: <https://youtu.be/cCOL7MC4Pl0>

## Questions

### İbrahim AKANÇAY

Can we watch event loop, callstack of our codes in browser devtools? if yes how? Can you show with an example?

### Akın Tanış

Q: Are there any side effects of using observables instead of promises? Which one is recommended?

### Mones Hamd

as a web developer , before build a web app ,should i consider using promises as much as possible , as we made in prep exercise ??

### Ghufran Thabit

Hello, although I understand the event loop I'm still confused and couldn't understand the answers to these questions. <https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/its-quiz-time>
Thank you in advance!

### Baraah Ranneh

My question is: How Do I Cancel a Promise?

### Sezgin

What is the Web API , is it part of browser , what is the main functionality of it in developing web application ?

### Beyza

To avoid callback hell we are using promises. However there can be too much .then, promise hell. How can escape promise hell? Thank you.

### cynthia susana

What is the difference between promise .all() and promise.race() and in which cases we use them ?

### Amer Barnawi

Question:
If I want to use ( Promise ) and after that ( then method ) and ( catch ) ;
Which is useful more? and which one is more used and why?
Using the ( Chain ) or ( without chaining ).
For example :
Chain:

```js
piece of code.
const myPromise = new Promise( (resolve, reject) => { } ).then();
piece of code.
```

```js
piece of code.
const myPromise = new Promise( (resolve, reject) => { } );
(*) piece of code.
myPromise.then();
piece of code.
```

Without chaining:
Do I need the code (\*) in some cases before using the ( then ) method?

### Abdullah S

In which conditions do I need to use promise. race?

### Ashraf Alshashaa

Q: Is async-await better than normal promises?
