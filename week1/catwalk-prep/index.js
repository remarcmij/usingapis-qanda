const STEP_SIZE_PX = 10;
const STEP_INTERVAL_MS = 50;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

function walk(img, startPos, stopPos, cb) {
  // Resolve this promise when the cat (`img`) has walked from `startPos` to
  // `stopPos`.
  // Make good use of the `STEP_INTERVAL_PX` and `STEP_INTERVAL_MS`
  // constants.
  let currentPos = startPos;
  img.style.left = currentPos + 'px';
  const intervalId = setInterval(() => {
    currentPos += STEP_SIZE_PX;
    img.style.left = currentPos + 'px';
    if (stopPos <= currentPos) {
      // stop calling the interval
      clearInterval(intervalId);
      // Resolve this promise when the cat (`img`) has walked from `startPos` to `stopPos`.

      if (Math.random() > 0.5) {
        cb(new Error('Oops..'));
      } else {
        cb();
      }
    }
  }, STEP_INTERVAL_MS);
}

function dance(img, cb) {
  // Switch the `.src` of the `img` from the walking cat to the dancing cat
  // and, after a timeout, reset the `img` back to the walking cat. Then
  // resolve the promise.
  // Make good use of the `DANCING_CAT_URL` and `DANCE_TIME_MS` constants.
  const oldSource = img.src;
  img.src = DANCING_CAT_URL;
  setTimeout(() => {
    img.src = oldSource;
    cb();
  }, DANCE_TIME_MS);
}

function catWalk() {
  const img = document.querySelector('img');
  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  walk(img, startPos, centerPos, (err) => {
    if (err) {
      console.log(err.message);
    } else {
      dance(img, () => walk(img, centerPos, stopPos, () => catWalk()));
    }
  });
}

window.addEventListener('load', catWalk);
