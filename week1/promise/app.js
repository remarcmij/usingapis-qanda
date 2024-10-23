// import { SyncPromise as Promise } from './sync-promise.js';
import { AsyncPromise as Promise } from './async-promise.js';

function main(option) {
  console.log('<<< main starting >>>');

  new Promise((resolve, reject) => {
    switch (option) {
      case 1:
        resolve();
        break;
      case 2:
        reject();
        break;
      case 3:
        setTimeout(resolve, 2000);
        break;
      case 4:
        setTimeout(reject, 2000);
    }
  })
    .then(() => {
      console.log('then 1');
    })
    .then(() => {
      console.log('then 2');
    })
    .catch(() => {
      console.log('catch 3');
    })
    .catch(() => {
      console.log('catch 4');
    })
    .then(() => {
      console.log('then 5');
    });

  console.log('<<< main ending >>>');
}

// From the command line, type: node app.js <number>
// where <number> is 1, 2, 3 or 4
main(+process.argv[2]);
