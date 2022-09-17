// Adapted from: https://javascript.info/fetch-abort

const ABORT_TIMEOUT_MS = 40;
const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=5';

async function main() {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), ABORT_TIMEOUT_MS);

  try {
    const response = await fetch(POKEMON_URL, {
      signal: controller.signal,
    });
    console.log(response);
  } catch (err) {
    if (err.name == 'AbortError') {
      // handle abort()
      console.error('Aborted!');
    } else {
      throw err;
    }
  }
}

main();
