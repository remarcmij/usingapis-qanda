import myVideos from './myVideos.js';
import playVideo from './playVideo.js';

function bingeWatch(videos) {
  return videos.reduce((promise, video) => {
    return promise.then(() => playVideo(video));
  }, Promise.resolve());
}

bingeWatch(myVideos);
