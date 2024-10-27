import { AsyncPromise as Promise } from '../lib/async-promise.js';
import { playlist } from './common.js';

function playVideo({ episode, title, synopsis }) {
  return new Promise((resolve) => {
    console.log(`\nPlaying episode ${episode}: ${title}`);
    console.log(synopsis);
    setTimeout(() => {
      console.log(`Finished episode ${episode}`);
      resolve(episode);
    }, Math.random() * 1000);
  });
}

function bingeWatch(videos) {
  const promises = videos.map((video) => playVideo(video));
  setTimeout(() => {
    Promise.all(promises).then((results) => console.log(results));
  }, 2000);
}

bingeWatch(playlist);
