const jsonString = '{"id":4,"title":"Using APIs"}';

// White space in JSON text helps human readers to see the structure of the
// data. The computer does not need or care about white space.
const jsonData = JSON.parse(jsonString);

console.log(1, typeof jsonData);
console.log(2, jsonData);
