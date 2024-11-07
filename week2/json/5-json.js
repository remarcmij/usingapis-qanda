// Sometimes you expect JSON data from a network request but get back HTML instead:

const response = `<html lang="en">
  <body>
    <p>There was an error.</p>
  </body>
</html>`;

const jsonData = JSON.parse(response);

console.log(1, jsonData);
