const VALID_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=5';
const INVALID_URL = 'https://pokeapi.co/api/v2/pokemons/?limit=5';

async function fetchJSON(url) {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error('Response was not okay');
}

function renderResults(pokemons) {
  const errorElement = document.querySelector('#error');
  errorElement.innerText = '';
  const pokemonsElement = document.querySelector('#json');
  pokemonsElement.innerText = JSON.stringify(pokemons, undefined, 10);
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
    const option = document.querySelector('#option');
    const url = option.checked ? INVALID_URL : VALID_URL;
    try {
      const pokemonData = await fetchJSON(url);
      renderResults(pokemonData);
    } catch (err) {
      renderError(err);
    }
  });
}
window.addEventListener('load', main);
