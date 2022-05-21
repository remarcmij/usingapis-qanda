const videos = [
  'episode1',
  'episode2',
  'episode3',
  'episode4',
  'episode5',
  'episode6',
];

function watchOne(index) {
  return new Promise((resolve) => {
    console.log(`Watching ${videos[index]}`);
    setTimeout(() => {
      console.log(`Finished ${videos[index]}`);
      resolve();
    }, 2000);
  });
}

function bingeWatch(index = 0) {
  watchOne(index).then(() => {
    if (index < videos.length - 1) {
      bingeWatch(index + 1);
    }
  });
}

bingeWatch();
