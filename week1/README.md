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

Advanced Event Loop video: <https://youtu.be/cCOL7MC4Pl0>

## Questions

### Mo

Q: why do we add setTimeout() in our promise function ? i found that in many exercises. is it to the function asynchronous? in that case promises in default are synchronous?

```js
(itemName, distributorName) => {
  console.log(`Checking availability of ${itemName} at ${distributorName}...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (restockSuccess()) {
        console.log(`${itemName} are in stock at ${distributorName}`);
        resolve(itemName);
      } else {
        reject(
          `Error: ${itemName} is unavailable from ${distributorName} at this time.`
        );
      }
    }, 1000);
  });
};
```

### Edward

Q: should we directly get used to the ES7 style using async and wait? Most tutorials and documentation does not use ES7 is there any reason for that?

### Furkan

Q: We use `Promise.all()` to wait for all promises to be resolved and then return the all values as an array. But in which case we should use `Promise.any()` ? Could you give an example please?

### Serdar

Q: Can you give a small example of not _‘blocking the event loop’_ and how to _‘queue up the code’_? Understood the concept but, couldn’t visualize it well in my mind. Where and how to use it?

### Hüseyin

```js
const promise = new Promise((resolve, reject) => {
  reject(Error('Some error occurred'));
})
promise.catch(error => console.log(error.message));
promise.catch(error => console.log(error.message)`);
```

Q: What is the difference between these codes?

```js
const promise = new Promise((resolve, reject) => {
  reject(Error('Some Error Occurred'));
})
  .catch((error) => console.log(error))
  .then((error) => console.log(error));
```

### Suleyman

Can we solve prepExercise of this week?

### Lynn

I was checking some code online and I saw this:

```js
const promise = new Promise((res) => res(2));
promise
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .finally((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
  });
```

and the output was :
2
4
undefined
8
why was the output of the finally undefined?`

### Radhi

Q: How does JS decide which callback will be synchronous and which - Asynchronous?
