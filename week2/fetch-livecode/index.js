const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=5';

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  return response.json();
}

function renderData(jsonData) {
  const root = document.querySelector('#root');
  const pre = document.createElement('pre');
  const jsonString = JSON.stringify(jsonData, null, 2);
  pre.textContent = jsonString;
  root.appendChild(pre);
}

function renderError(err) {
  const root = document.querySelector('#root');
  const h1 = document.createElement('h1');
  h1.textContent = err.message;
  root.appendChild(h1);
}

async function main() {
  try {
    const pokemons = await fetchData(URL);
    renderData(pokemons);
  } catch (err) {
    renderError(err);
  }
}

window.addEventListener('load', main);
