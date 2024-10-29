import { displayResult } from './helpers.js';
import { beep } from '../lib/beep.js';

const STEP_SIZE_PX = 10;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

function walk(img, startPos, stopPos, stepInterval, catNum) {
  console.log(`>>> cat#${catNum} walking`);
  return new Promise((resolve) => {
    let position = startPos;
    const intervalId = setInterval(() => {
      img.style.left = `${position}px`;
      position += STEP_SIZE_PX;
      if (position >= stopPos) {
        clearInterval(intervalId);
        resolve();
      }
    }, stepInterval * 3);
  });
}

function dance(img, catNum) {
  console.log(`>>> cat#${catNum} dancing`);
  return new Promise((resolve) => {
    const savedSrc = img.src;
    img.src = DANCING_CAT_URL;
    setTimeout(() => {
      img.src = savedSrc;
      resolve();
    }, DANCE_TIME_MS);
  });
}

function catWalk(catNum, top, stepInterval, rejectNum) {
  const img = document.createElement('img');
  img.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
  const imgWidth = 296; // Rendered width not available at this point
  img.style.top = `${top}px`;
  img.style.left = `${-imgWidth}px`;
  document.body.append(img);

  const startPos = -imgWidth;
  const centerPos = (window.innerWidth - imgWidth) / 2;
  const stopPos = window.innerWidth;

  return walk(img, startPos, centerPos, stepInterval, catNum)
    .then(() => dance(img, catNum))
    .then(() => walk(img, centerPos, stopPos, stepInterval, catNum))
    .then(() => img.remove())
    .then(() => {
      if (catNum === rejectNum) {
        throw `cat#${catNum} rejects`;
      }
      return `cat#${catNum} resolves`;
    });
}

function createCatWalkPromises(numCats, rejectCat) {
  const promises = [];
  for (let i = 0; i < numCats; i++) {
    const stepInterval = 20 - i * 3;
    const top = 75 + i * 200;
    const catNum = i + 1;
    promises.push(catWalk(catNum, top, stepInterval, rejectCat));
  }
  return promises;
}

const REJECT_CAT = -1; // E.g., change to 3 to reject cat#3

function catWalks() {
  console.log('<<< catWalks start >>>');
  const promises = createCatWalkPromises(3, REJECT_CAT);

  // Try: .all, .allSettled, .any, .race
  const p = Promise.all(promises)
    .then((resolvedVal) => {
      beep();
      displayResult(catWalks, '.then()', resolvedVal);
    })
    .catch((rejectedVal) => {
      beep();
      displayResult(catWalks, '.catch()', rejectedVal);
    })
    .then(catWalks);

  console.log('<<< catWalks exit >>>');
  return p;
}

document.querySelector('button').addEventListener('click', catWalks);
