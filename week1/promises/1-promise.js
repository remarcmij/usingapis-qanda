/*
A promise is a placeholder for a value that will be computed in the future.

A Promise is an object that represents the eventual result of an asynchronous operation.
*/

const x = new Promise((resolve, reject) => {
  // Do nothing
});

console.log(1, typeof x);
console.log(2, x);

/*
Vlada:
 1 object
 2 Promise

Abdulkader:
  1 function
  2 NaN

Lya:
  1 object
  2 state
 
 */
