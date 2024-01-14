/*******************************************************************************
 * This example simulates fetching paged data from an API.
 * Each response includes a URL that can be used to fetch a next page.
 ******************************************************************************/
import fetch from './fetch.js';

function antiFetch(url) {
  return fetch(url);
}

function main() {
  antiFetch('https://hello.com')
    .then((response) => {
      console.log('response =', response);
      return antiFetch(response.nextUrl);
    })
    .then((response) => {
      console.log('response =', response);
    })
    .catch((err) => {
      console.log('Error:', err.message);
    });
}

main();
