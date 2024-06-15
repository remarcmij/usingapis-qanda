/*
  Old-style JavaScript (pre-ES6) using XMLHttpRequest, var, and no
  arrow functions.
*/
function getData(url, cb) {
  var request = new XMLHttpRequest();

  request.open('GET', url, true);

  request.onreadystatechange = function () {
    if (request.readyState == XMLHttpRequest.DONE) {
      if (request.status >= 200 && request.status < 400) {
        var json = JSON.parse(request.responseText);
        cb(null, json);
      }
    }
  };

  request.onerror = function () {
    cb(new Error('Request failed: network error'));
  };

  request.send();
}

function main() {
  var selectEl = document.querySelector('#select');
  var containerEl = document.querySelector('#container');

  function responseCallback(err, data) {
    if (err) {
      containerEl.innerHTML = 'Oops, something went wrong';
      return;
    }
    containerEl.innerHTML = JSON.stringify(data, null, 2);
  }

  selectEl.addEventListener('change', function (e) {
    var url = `https://jsonplaceholder.typicode.com/${e.target.value}`;
    getData(url, responseCallback);
  });
}

window.addEventListener('load', main);
