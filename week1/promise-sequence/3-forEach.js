import myVideos from './myVideos.js';
import playVideo from './playVideo.js';

function bingeWatch(videos) {
  let promise = Promise.resolve();
  videos.forEach((video) => {
    promise = promise.then(() => playVideo(video));
  });
  return promise;
}

bingeWatch(myVideos);
