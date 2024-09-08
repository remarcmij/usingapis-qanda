// Adapted from: https://javascript.info/fetch-abort

const ABORT_TIMEOUT_MS = 1000;
const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=5';

async function getPokemons() {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), ABORT_TIMEOUT_MS);

  try {
    const response = await fetch(POKEMON_URL, {
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }
    const pokemons = await response.json();
    document.querySelector('#output').textContent = JSON.stringify(
      pokemons,
      null,
      2
    );
  } catch (err) {
    if (err.name == 'AbortError') {
      // handle abort()
      document.querySelector('#output').textContent = 'Aborted!';
    } else {
      document.querySelector('#output').textContent = err.message;
    }
  }
}

function main() {
  document.querySelector('#fetch-btn').addEventListener('click', getPokemons);
}

window.addEventListener('load', main);
