const EXAMPLE_API = '/pokemonsx';

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status} - ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

function renderData(jsonData) {
  const root = document.querySelector('#root');
  const pre = document.createElement('pre');
  root.appendChild(pre);
  pre.textContent = JSON.stringify(jsonData, null, 2);
}

function renderError(err) {
  const root = document.querySelector('#root');
  const h1 = document.createElement('h1');
  h1.textContent = err.message;
  root.appendChild(h1);
}

async function main() {
  const jsonData = await fetchData(EXAMPLE_API);
  if (jsonData !== null) {
    renderData(jsonData);
  } else {
    renderError(new Error('Oops..'));
  }
}

window.addEventListener('load', main);
