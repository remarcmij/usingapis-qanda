function main() {
  // Once create a promise WILL settle.
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(42);
    }, 5000);

    document
      .querySelector('#reject-btn')
      .addEventListener('click', () => reject(new Error('canceled')));
  });

  const title = document.querySelector('#title');

  p.then((value) => {
    title.textContent = `Resolved: ${value}`;
  }).catch((err) => {
    title.textContent = `Rejected: ${err.message}`;
  });
}

window.addEventListener('load', main);
