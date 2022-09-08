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
    }, 2000);
  });
}

function bingeWatch(videos) {
  return videos.reduce((promise, video) => {
    return promise.then(() => playVideo(video));
  }, Promise.resolve());
}

bingeWatch(myVideos);
