const myVideos = [
  ['episode1', 2000],
  ['episode2', 1000],
  ['episode3', 3000],
  ['episode4', 2000],
  ['episode5', 1000],
  ['episode6', 2000],
];

function playVideo(video, time) {
  return new Promise((resolve, reject) => {
    console.log(`Playing ${video}, duration=${time}`);
    if (time < 2000) {
      reject(new Error('too short'));
      return;
    }
    setTimeout(() => {
      console.log(`Finished`);
      resolve(video);
    }, time);
  });
}

// async function bingeWatch(videos) {
//   for (const [video, time] of videos) {
//     await playVideo(video, time);
//   }
// }

// bingeWatch(myVideos);
const promises = myVideos.map((video) => playVideo(...video));
console.log({ promises });

Promise.any(promises)
  .then((result) => {
    console.log('Promise.any');
    console.log({ result });
  })
  .catch((err) => {
    console.log(err.message);
  });

// playVideo(...myVideos[0]).then(() => playVideo(...myVideos[1]));

// function playVideo2(videos, index) {
//   const [video, time] = videos[index];
//   console.log(`Playing ${video}, duration=${time}`);
//   setTimeout(() => {
//     console.log(`Finished`);
//     if (index < videos.length - 1) {
//       playVideo(videos, index + 1);
//     }
//   }, time);
// }

// playVideo2(myVideos, 0);
