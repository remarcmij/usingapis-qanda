<!-- cSpell:disable -->

# Q&A Week 1

## Today's Agenda

(Start recording!)

- How is it going so far?
- Prep exercise: Cat Walk
  - What do you think the advantages are of having the constants in the global scope? Are there any disadvantages?
  - To make the code loop we cannot use a standard JavaScript loop (`for` or `while`). Why is that?
  - Do you feel this version is easier to read than the version you made in the Browsers module?
  - Is this version more efficient or not or does it not matter?
- Event loop experiments
- Promise experiments

  One break around 13:15.

- Go through questions

- If time left: Cat Walk using callbacks

Advanced Event Loop video: <https://youtu.be/cCOL7MC4Pl0>

## Questions

### Fadi-Naddaf

Q1: Is the default of promise method is async?  
Q2: Can we use Promise for the eventlistener?  
Like when the user or the client scroll the page it will execute the then method and when scroll again the other then executed.  
Q3: Is there a difference if we wrote the catch method like this:
`promise.catch(error => console.log(error.message));`
Or like this:
`.catch(error => console.log(error))`  
Q4: If I have a hundreds of videos and I want them to be loaded by order one after another. What is the best way to do it? because it's not logic to write promise for each video?

### Yasemin

Hello, my question is
Can we use await instead of promise?

Here are my GitHub links for the prep exercise. <https://ysmnclsknnl.github.io/catwalk/>. <https://github.com/ysmnclsknnl/catwalk>

### Clement

Hello Q:
We have promises, async-await and callbacks. Which one is better to implement base on your reference, and why should we use one over, the others? What is the advantage and disadvantage? Thank you.

### Baraah

Hi,my question is:
Can we use await only with promises?

### Serva

Are setTimeout and setInterval only functions that we can use for creating async behavior

### Ali

Hello, here is my question:
What is the difference between microtask queue and callback queue? Why microtask queue has higher priority? Thanks
