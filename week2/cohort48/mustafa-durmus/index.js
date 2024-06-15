/* fetch 2015 (Chrome) */

async function getData(url) {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error(`Request failed: HTTP ${response.status}`);
}

function main() {
  const selectEl = document.querySelector('#select');
  const containerEl = document.querySelector('#container');

  selectEl.addEventListener('change', async (event) => {
    try {
      const data = await getData(
        `https://api.exchangerate-api.com/v4/latest/${event.target.value}`
      );
      containerEl.innerHTML = JSON.stringify(data, null, 2);
    } catch (error) {
      console.error(error.message);
      containerEl.innerHTML = 'Oops, something went wrong';
    }
  });
}

window.addEventListener('load', main);
