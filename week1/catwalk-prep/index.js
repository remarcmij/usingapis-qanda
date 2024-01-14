'use strict';
const STEP_SIZE_PX = 10;
const STEP_INTERVAL_MS = 50;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

function walk(img, startPos, stopPos, cb) {
  img.style.left = `${startPos}px`;

  const intervalId = setInterval(() => {
    startPos += STEP_SIZE_PX;
    img.style.left = `${startPos}px`;

    if (startPos >= stopPos) {
      clearInterval(intervalId);
      cb();
    }
  }, STEP_INTERVAL_MS);
}

function dance(img, cb) {
  const originalSrc = img.src;
  img.src = DANCING_CAT_URL;

  setTimeout(() => {
    img.src = originalSrc;
    cb();
  }, DANCE_TIME_MS);
}

function catWalk() {
  const img = document.querySelector('img');
  img.style.position = 'absolute';

  const startPos = 0;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  const walkAndDance = () => {
    walk(img, startPos, centerPos, () =>
      dance(img, () =>
        walk(img, centerPos, stopPos, () => {
          img.style.left = `${startPos}px`; // Reset position to start
          walkAndDance(); // Repeat the sequence indefinitely
        })
      )
    );
  };

  walkAndDance();
}

window.addEventListener('load', catWalk);
