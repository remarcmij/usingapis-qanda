const myVideos = [
  'episode1',
  'episode2',
  'episode3',
  'episode4',
  'episode5',
  'episode6',
];

function playVideo(videos) {
  return new Promise((resolve) => {
    console.log(`Playing ${videos}`);
    setTimeout(() => {
      console.log(`Finishing ${videos}`);
      resolve();
    }, 1000);
  });
}

function bingeWatch(videos) {
  playVideo(videos[0])
    .then(() => playVideo(videos[1]))
    .then(() => playVideo(videos[2]))
    .then(() => playVideo(videos[3]))
    .then(() => playVideo(videos[4]))
    .then(() => playVideo(videos[5]));
}

bingeWatch(myVideos);
