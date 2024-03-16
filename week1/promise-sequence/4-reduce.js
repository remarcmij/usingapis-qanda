import { playlist, playVideo } from './common.js';

function bingeWatch(videos) {
  return videos.reduce((promise, video) => {
    return promise.then(() => playVideo(video));
  }, Promise.resolve());
}

bingeWatch(playlist);
