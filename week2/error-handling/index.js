import fakeFetch from './helpers/fakeFetch.js';

async function fetchJSON(url) {
  const response = await fakeFetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error(`HTTP Error ${response.status}:  ${response.statusText}`);
}

async function fetchUpper(url) {
  const data = await fetchJSON(url);
  data.names = data.names.map((name) => name.toUpperCase());
  return data;
}

async function main() {
  try {
    const data = await fetchUpper(
      'http://hackyourfuture.nl/api/students/class45'
    );
    const pre = document.createElement('pre');
    pre.textContent = JSON.stringify(data, null, 2);
    document.body.appendChild(pre);
  } catch (err) {
    const p = document.createElement('p');
    p.textContent = err.message;
    document.body.appendChild(p);
  }
}

main();

/*
  Call Stack for error path

  fetchJSON  <- throws an error
  fetchUpper <- no try/catch present
  main() <- implements a try/catch block

  JavaScript walks the call chain until a higher level caller is found
  that implements a try/catch block.

  If nowhere in the call chain errors are handled then the error is caught
  by the host environment (browser or Node.,.js) which in its turn will terminate
  the current JavaScript execution.
*/
