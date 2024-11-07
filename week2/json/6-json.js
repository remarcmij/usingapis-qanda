// To encode a JavaScript object as JSON text we can use the `JSON.stringify()`
//  method. By default it doesn't add white space.

const jsonData = {
  id: 4,
  title: 'Using APIs',
};

const jsonString = JSON.stringify(jsonData);

console.log(1, typeof jsonData);
console.log(2, typeof jsonString);
console.log(3, jsonString);
