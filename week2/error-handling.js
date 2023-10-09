'use strict';

const SUCCESS_RESPONSE = `{
  "page": 1,
  "names": [
    "Christina",
    "Enes",
    "Kadir",
    "Kumait",
    "Lena",
    "Lenin",
    "Liz",
    "Marly",
    "Milad",
    "Mohammed",
    "Rama",
    "Saleh",
    "Sanaz",
    "Zehra"
    ]
  }`;

const ERROR_RESPONSE = `
<html>
  <head>
    <title>Error Page</title>
  <head>
  <body>
    <h1>Invalid Request</h1>
  </body>
</html>
`;

async function fakeFetch() {
  return JSON.parse(SUCCESS_RESPONSE);
}

async function addTimeStamp() {
  const jsonObj = await fakeFetch();
  jsonObj.timestamp = Date.now();
  return jsonObj;
}

async function main() {
  try {
    const data = await addTimeStamp();
    console.log(data);
  } catch (err) {
    console.error(`Something went wrong: ${err.message}`);
  }
}

main();
