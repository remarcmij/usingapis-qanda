// To include white space (for human consumption only) we can add parameters to
// `JSON.stringify()`.

const jsonData = {
  id: 4,
  title: 'Using APIs',
};

// add line breaks and indent with two spaces.
const jsonString = JSON.stringify(jsonData, null, 2);

console.log(1, typeof jsonData);
console.log(2, typeof jsonString);
console.log(jsonString);
