function getData(url) {
  return fetch(url)
    .then((response) => response.text())
    .then((text) => JSON.parse(text));
}

function main() {
  const selectEl = document.querySelector('#select');
  const containerEl = document.querySelector('#container');
  selectEl.addEventListener('change', (e) => {
    getData(`https://jsonplaceholder.typicode.com/${e.target.value}`)
      .then((text) => {
        containerEl.innerHTML = JSON.stringify(text, null, 2);
      })
      .catch((err) => {
        containerEl.innerHTML = 'Oops, something went wrong';
      });
  });
}

window.addEventListener('load', main);
