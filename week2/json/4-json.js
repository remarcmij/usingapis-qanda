// A corrupt JSON string encoding will cause `JSON.parse()` to throw and error.

// There is a quote missing after Using APIs
const jsonString = '{"id":4,"title":"Using APIs}';

const jsonData = JSON.parse(jsonString);

console.log(1, jsonData);
