const myVideos = [
  'episode1',
  'episode2',
  'episode3',
  'episode4',
  'episode5',
  'episode6',
];

function playVideo(video) {
  return new Promise((resolve) => {
    console.log(`Playing ${video}`);
    setTimeout(() => {
      console.log(`Finishing ${video}`);
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
