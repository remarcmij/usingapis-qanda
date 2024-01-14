'use strict';

const STEP_INTERVAL_MS = 50;
const STEP_SIZE_PX = 10;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
const WALKING_CAT_URL =
  'http://www.anniemation.com/clip_art/images/cat-walk.gif';

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function walk(img, startPos, stopPos) {
  let currentPosition = startPos;
  while (currentPosition < stopPos) {
    currentPosition += STEP_SIZE_PX;
    img.style.left = currentPosition + 'px';
    await wait(STEP_INTERVAL_MS);
  }
}

async function dance(img) {
  img.src = DANCING_CAT_URL;
  await wait(DANCE_TIME_MS);
  img.src = WALKING_CAT_URL;
}

async function catWalk() {
  const img = document.querySelector('img');
  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  while (true) {
    await walk(img, startPos, centerPos);
    await dance(img);
    await walk(img, centerPos, stopPos);
  }
}

window.addEventListener('load', catWalk);
