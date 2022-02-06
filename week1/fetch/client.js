/*******************************************************************************
 * This example simulates fetching paged data from an API.
 * Each response includes a URL that can be used to fetch a next page.
 ******************************************************************************/
import fetch from './fetch.js';

function main() {
  fetch('https://hello.com').then((response) => {
    console.log('response =', response);
    // return fetch(response.nextUrl);
    // })
    // .then((response) => {
    //   console.log('response =', response);
    // })
    // .catch((response) => {
    //   console.log('Error:', response.error.message);
    //   return fetch(response.url);
  });
}

main();
