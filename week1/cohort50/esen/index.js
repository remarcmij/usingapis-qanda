function main() {
  // Once created a promise WILL settle.
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(42);
    }, 5000);

    const rejectBtn = document.querySelector('#reject-btn');

    rejectBtn.addEventListener('click', () => {
      reject(new Error('canceled'));
    });
  });

  const title = document.querySelector('#title');

  p.then((value) => {
    title.textContent = `Resolved: ${value}`;
  }).catch((err) => {
    title.textContent = `Rejected: ${err.message}`;
  });
}

window.addEventListener('load', main);
