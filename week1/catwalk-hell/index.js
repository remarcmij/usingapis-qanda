function catWalk() {
  const img = document.querySelector('img');
  const startPos = -img.width;
  const dancePos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  let position = startPos;

  let intervalId = setInterval(() => {
    img.style.left = `${position}px`;
    position += 10;
    if (position >= dancePos) {
      clearInterval(intervalId);
      const savedSrc = img.src;
      img.src =
        'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
      setTimeout(() => {
        img.src = savedSrc;
        intervalId = setInterval(() => {
          img.style.left = `${position}px`;
          position += 10;
          if (position >= stopPos) {
            clearInterval(intervalId);
            catWalk();
          }
        }, 50);
      }, 5000);
    }
  }, 50);
}

window.addEventListener('load', catWalk);
