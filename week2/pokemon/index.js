const VALID_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=5';
const INVALID_URL = 'https://pokeapi.co/api/v2/pokemons/?limit=5';

async function fetchJSON(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
    throw err; // Rethrow the error so the catch block in main can catch it too.
  }
  // Fetch the JSON data from the web API that responds to the `url` parameter
  // and return a promise that resolves to a corresponding JavaScript object.
  // Make sure to check for HTTP errors.
}

function renderResults(pokemons) {
  // 1. Clear the text content of the HTML element with id `error`.
  const errorElement = document.querySelector('#error');
  errorElement.innerText = '';

  // 2. Set the text content of the HTML element with id `json` to JSON text
  //    from the `pokemons` argument, formatted in a human readable form (i.e.,
  //    with indentation and line breaks).
  const pokemonsElement = document.querySelector('#json');
  pokemonsElement.innerText = JSON.stringify(pokemons, null, 2);
}

function renderError(err) {
  // 1. Clear the text content of the HTML element with id `json`.
  const pokemonsElement = document.querySelector('#json');
  pokemonsElement.innerText = '';

  // 2. Set the text content of the HTML element with id `error` to the
  //    `.message` property of the `err` parameter.
  const errorElement = document.querySelector('#error');
  errorElement.innerText = err;
}

function main() {
  const button = document.querySelector('#button');
  button.addEventListener('click', async () => {
    const option = document.querySelector('#option');
    const url = option.checked ? INVALID_URL : VALID_URL;
    try {
      const pokemons = await fetchJSON(url);
      renderResults(pokemons);
    } catch (err) {
      renderError(err);
    }
  });
}

window.addEventListener('load', main);
