import { AsyncPromise as Promise } from '../lib/async-promise.js';
import { playlist, playVideo } from './common.js';

function bingeWatch(videos) {
  let promise = Promise.resolve();
  videos.forEach((video) => {
    promise = promise.then(() => playVideo(video));
  });
  return promise;
}

bingeWatch(playlist);
