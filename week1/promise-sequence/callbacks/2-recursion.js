import { playlist, playVideo } from './common.js';

function bingeWatch(videos, index = 0) {
  playVideo(videos[index], () => {
    if (index < videos.length - 1) {
      bingeWatch(videos, index + 1);
    }
  });
}

bingeWatch(playlist);
