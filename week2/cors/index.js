const BASE_URL = 'http://palulu:3000';

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status} - ${response.statusText}`);
  }
  return response.json();
}

function renderData(students) {
  const root = document.querySelector('#root');
  const ul = document.createElement('ul');
  root.appendChild(ul);
  students.forEach((student) => {
    const li = document.createElement('li');
    li.textContent = student.name;
    ul.appendChild(li);
  });
}

function renderError(err) {
  const root = document.querySelector('#root');
  const h1 = document.createElement('h1');
  h1.textContent = err.message;
  root.appendChild(h1);
}

async function main() {
  try {
    const jsonData = await fetchData(BASE_URL + '/students');
    renderData(jsonData);
  } catch (err) {
    renderError(err);
  }
}

window.addEventListener('load', main);
