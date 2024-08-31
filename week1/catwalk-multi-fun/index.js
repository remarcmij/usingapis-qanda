import { beep, displayResult } from './helpers.js';

const STEP_SIZE_PX = 10;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

function walk(img, startPos, stopPos, stepInterval) {
  return new Promise((resolve) => {
    let position = startPos;
    const intervalId = setInterval(() => {
      img.style.left = `${position}px`;
      position += STEP_SIZE_PX;
      if (position >= stopPos) {
        clearInterval(intervalId);
        resolve();
      }
    }, stepInterval * 4);
  });
}

function dance(img) {
  return new Promise((resolve) => {
    const savedSrc = img.src;
    img.src = DANCING_CAT_URL;
    setTimeout(() => {
      img.src = savedSrc;
      resolve();
    }, DANCE_TIME_MS);
  });
}

function catWalk(catNum, top, stepInterval) {
  const img = document.createElement('img');
  img.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
  img.style.top = `${top}px`;
  img.style.left = `${-img.width}px`;
  document.body.append(img);

  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  return walk(img, startPos, centerPos, stepInterval)
    .then(() => dance(img))
    .then(() => walk(img, centerPos, stopPos, stepInterval))
    .then(() => img.remove())
    .then(() => {
      if (catNum === 3) {
        // throw `Cat-${catNum} rejected`;
      }
      return `Cat-${catNum} resolved`;
    });
}

function createCatWalkPromises(numCats) {
  const promises = [];
  for (let i = 0; i < numCats; i++) {
    const stepInterval = 20 - i * 3;
    const top = 75 + i * 200;
    promises.push(catWalk(i + 1, top, stepInterval));
  }
  return promises;
}

function catWalks() {
  const promises = createCatWalkPromises(3);

  // Try: .all, .allSettled, .any, .race
  return Promise.race(promises)
    .then((resolvedVal) => {
      beep();
      displayResult(catWalks, 'THEN', resolvedVal);
    })
    .then(catWalks)
    .catch((rejectedVal) => {
      beep();
      displayResult(catWalks, 'CATCH', rejectedVal);
    });
}

document.querySelector('button').addEventListener('click', catWalks);
