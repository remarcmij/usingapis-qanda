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

function bingeWatch(videos, index = 0) {
  playVideo(videos[index]).then(() => {
    if (index < videos.length - 1) {
      bingeWatch(videos, index + 1);
    }
  });
}

bingeWatch(myVideos);
