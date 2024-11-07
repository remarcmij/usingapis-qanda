const jsonString = `{
  "id": 4,
  "title": "Using APIs"
}`;

//JSON strings can be decoded through the `JSON.parse()` method.
const jsonData = JSON.parse(jsonString);

console.log(1, typeof jsonData);
console.log(2, jsonData);
