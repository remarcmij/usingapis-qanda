'use strict';

const VALID_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=5';
const INVALID_URL = 'https://pokeapi.co/api/v2/pokemons/?limit=5';

async function fetchJSON(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

function renderResults(pokemons) {
  const errorElement = document.querySelector('#error');
  errorElement.innerText = '';

  const pokemonsElement = document.querySelector('#json');
  pokemonsElement.innerText = JSON.stringify(pokemons, null, 2);
}

function renderError(err) {
  const pokemonsElement = document.querySelector('#json');
  pokemonsElement.innerText = '';

  const errorElement = document.querySelector('#error');
  errorElement.innerText = err;
}

function mainThenCatch() {
  console.log('main start');
  const button = document.querySelector('#button');
  button.addEventListener('click', () => {
    const option = document.querySelector('#option');
    const url = option.checked ? INVALID_URL : VALID_URL;

    fetchJSON(url).then(renderResults).catch(renderError);
  });

  console.log('main exit');
}

function mainAsyncAwait() {
  console.log('main start');
  try {
    const button = document.querySelector('#button');
    button.addEventListener('click', async () => {
      const option = document.querySelector('#option');
      const url = option.checked ? INVALID_URL : VALID_URL;

      try {
        const data = await fetchJSON(url);
        renderResults(data);
      } catch (error) {
        renderError(error.message);
      }
    });
  } catch (err) {
    console.log(err);
  }
  console.log('main exit');
}

window.addEventListener('load', mainThenCatch);
