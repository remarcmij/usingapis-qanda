'use strict';
const VALID_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=5';
const INVALID_URL = 'https://pokeapi.co/api/v2/pokemons/?limit=5';

async function fetchJSON(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    console.warn(`fetchJSON: ${err.message}`);
    // Rethrow the error to allow callers higher up in the call chain
    // to properly dispose of the error
    // throw err;
  }
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

function main() {
  const button = document.querySelector('#button');
  button.addEventListener('click', async () => {
    try {
      const option = document.querySelector('#option');
      const url = option.checked ? INVALID_URL : VALID_URL;
      const pokemons = await fetchJSON(url);
      renderResults(pokemons);
    } catch (err) {
      renderError(err);
    }
  });
}

window.addEventListener('load', main);
