import { playlist } from './common.js';

export function playVideo(video, done) {
  const { episode, title, synopsis } = video;
  console.log(`\nPlaying episode ${episode}: ${title}`);
  console.log(synopsis);
  setTimeout(() => {
    console.log(`Finished episode ${episode}`);
    done();
  }, 1000);
}

function bingeWatch(videos, index = 0) {
  playVideo(videos[index], () => {
    if (index < videos.length - 1) {
      bingeWatch(videos, index + 1);
    }
  });
}

bingeWatch(playlist);
