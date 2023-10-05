import myVideos from './myVideos.js';
import playVideo from './playVideo.js';

function bingeWatch(videos) {
  playVideo(videos[0])
    .then(() => playVideo(videos[1]))
    .then(() => playVideo(videos[2]))
    .then(() => playVideo(videos[3]))
    .then(() => playVideo(videos[4]))
    .then(() => playVideo(videos[5]));
}

bingeWatch(myVideos);
