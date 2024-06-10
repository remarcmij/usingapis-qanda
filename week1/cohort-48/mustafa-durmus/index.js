function getData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

function main() {
  getData('https://jsonplaceholder.typicode.com/users');
}

window.addEventListener('load', main);
