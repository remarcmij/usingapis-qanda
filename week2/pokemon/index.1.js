'use strict';
const VALID_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=5';
const INVALID_URL = 'https://pokeapi.co/api/v2/pokemons/?limit=5';

async function fetchJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status}`);
  }
  return response.json();
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
  console.log('main entry');
  const button = document.querySelector('#button');
  try {
    console.log('try entry');
    button.addEventListener('click', async () => {
      const option = document.querySelector('#option');
      const url = option.checked ? INVALID_URL : VALID_URL;
      const pokemons = await fetchJSON(url);
      renderResults(pokemons);
    });
    console.log('try exit');
  } catch (err) {
    renderError(err);
  }
  console.log('main exit');
}

window.addEventListener('load', main);
