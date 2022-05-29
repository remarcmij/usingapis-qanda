// Adapted from video by Stas: https://youtu.be/jiJJ2V8K1ik

async function searchShow(query) {
  const url = `http://api.tvmaze.com/search/shows?q=${query}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP Error: ${res.status}`);
  }
  const jsonData = await res.json();
  const results = jsonData.map((element) => element.show.name);
  return results;
}

function renderResults(results) {
  const list = document.getElementById('resultsList');
  list.innerHTML = '';
  results.forEach((result) => {
    const element = document.createElement('li');
    element.textContent = result;
    list.appendChild(element);
  });
}

const SEARCH_DELAY_MSECS = 250;

window.addEventListener('load', () => {
  let timeoutToken = null;

  const searchFieldElement = document.getElementById('searchField');
  searchFieldElement.addEventListener('input', () => {
    clearTimeout(timeoutToken);

    timeoutToken = setTimeout(async () => {
      try {
        const results = await searchShow(searchFieldElement.value);
        renderResults(results);
      } catch (err) {
        console.error(err.message);
      }
    }, SEARCH_DELAY_MSECS);
  });
});
