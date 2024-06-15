function getData(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.open('GET', url, true);

    request.onreadystatechange = () => {
      if (request.readyState == XMLHttpRequest.DONE) {
        if (request.status >= 200 && request.status < 400) {
          const json = JSON.parse(request.responseText);
          resolve(json);
        }
      }
    };

    request.onerror = () => {
      reject(new Error('Request failed: network error'));
    };

    request.send();
  });
}

function main() {
  const selectEl = document.querySelector('#select');
  const containerEl = document.querySelector('#container');

  selectEl.addEventListener('change', async (event) => {
    try {
      const data = await getData(
        `https://jsonplaceholder.typicode.com/${event.target.value}`
      );
      containerEl.innerHTML = JSON.stringify(data, null, 2);
    } catch (error) {
      console.error(error.message);
      containerEl.innerHTML = 'Oops, something went wrong';
    }
  });
}

window.addEventListener('load', main);
