'use strict';

const STEP_SIZE_PX = 10;
const STEP_INTERVAL_MS = 50;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

function walk(img, startPos, stopPos, cb) {
  img.style.left = startPos;
  img.style.left = `${startPos}px`;
  let currentPosition = startPos;

  const step = () => {
    currentPosition += STEP_SIZE_PX;
    img.style.left = `${currentPosition}px`;

    if (currentPosition >= stopPos) {
      clearInterval(intervalId);
      cb();
    }
  };

  const intervalId = setInterval(step, STEP_INTERVAL_MS);
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
  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  // Use the `walk()` and `dance()` functions to let the cat do the following:
  // 1. Walk from `startPos` to `centerPos`.
  // 2. Then dance for 5 secs.
  // 3. Then walk from `centerPos` to `stopPos`.
  // 4. Repeat the first three steps indefinitely.
  const startWalking = () => {
    walk(img, startPos, centerPos, () =>
      dance(img, () => walk(img, centerPos, stopPos, () => startWalking()))
    );
  };

  startWalking();
}

window.addEventListener('load', catWalk);
