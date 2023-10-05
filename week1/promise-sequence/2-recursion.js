import myVideos from './myVideos.js';
import playVideo from './playVideo.js';

function bingeWatch(videos, index = 0) {
  playVideo(videos[index]).then(() => {
    if (index < videos.length - 1) {
      bingeWatch(videos, index + 1);
    }
  });
}

bingeWatch(myVideos);
