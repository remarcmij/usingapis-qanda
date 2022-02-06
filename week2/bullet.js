function fireBullet() {
  return new Promise((resolve, reject) => {
    for (distance = 0; distance < 10; distance++) {
      console.log('distance', distance);
      if (distance === 7) {
        console.log(`--> calling resolve at distance ${distance}`);
        resolve(`>>> Bullet hit target at distance ${distance}`);
      }
      if (distance === 5) {
        console.log(`--> calling reject at distance ${distance}`);
        reject(`>>> Bullet is out of range at distance ${distance}`);
        return;
      }
    }
  });
}

fireBullet()
  .then((message) => {
    console.log('Resolved', message);
  })
  .catch((error) => {
    console.log('Rejected', error);
  });
