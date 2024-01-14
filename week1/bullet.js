function fireBullet(bullet, limit = 40) {
  return new Promise((resolve, reject) => {
    let distance = 0;

    const fly = () => {
      distance += 1;
      console.log(`bullet ${bullet} distance`, distance);
      if (distance === 10) {
        resolve(`>>> Bullet ${bullet} hit target`);
        return;
        // 1. Comment out `return` to simulate bullet hitting a paper target.
        // 2. Uncomment `return` to simulate bullet hitting a brick wall.
        // return;
      }
      if (distance === 9) {
        reject(`Something went wrong with bullet ${bullet}`);
        return;
      }
      if (distance < limit) {
        setTimeout(fly, 200);
      }
    };

    fly();
  });
}

const promises = [fireBullet(1, 31), fireBullet(2), fireBullet(3, 34)];

Promise.race(promises)
  .then((message) => {
    console.log('Resolved', message);
  })
  .catch((error) => {
    console.log('Rejected', error);
  });
