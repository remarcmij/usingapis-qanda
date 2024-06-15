/* axios: 2016 */

/* global axios */

function getData(url) {
  return axios.get(url);
}

function main() {
  const selectEl = document.querySelector('#select');
  const containerEl = document.querySelector('#container');

  selectEl.addEventListener('change', async (event) => {
    try {
      const data = await getData(
        `https://jsonplaceholder.typicode.com/${event.target.value}`
      );
      containerEl.innerHTML = JSON.stringify(data, null, 2);
    } catch (error) {
      console.error(error.message);
      containerEl.innerHTML = 'Oops, something went wrong';
    }
  });
}

window.addEventListener('load', main);
