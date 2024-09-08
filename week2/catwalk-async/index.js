'use strict';

const STEP_INTERVAL_MS = 50;
const STEP_SIZE_PX = 10;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

const walkingCatUrl = document.querySelector('img').src;

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function walk(img, startPos, stopPos) {
  let catPosition = startPos;

  while (catPosition < stopPos) {
    catPosition += STEP_SIZE_PX; //make a step forward
    img.style.left = `${catPosition}px`;
    await wait(STEP_INTERVAL_MS);
  }
}

async function dance(img) {
  img.src = DANCING_CAT_URL;
  await wait(DANCE_TIME_MS);
  img.src = walkingCatUrl;
}

async function catWalk() {
  const cat = document.querySelector('img');
  const startPos = -cat.width;
  const centerPos = (window.innerWidth - cat.width) / 2;
  const stopPos = window.innerWidth;

  while (true) {
    await walk(cat, startPos, centerPos);
    await dance(cat);
    await walk(cat, centerPos, stopPos);
  }
}

window.addEventListener('load', catWalk);
