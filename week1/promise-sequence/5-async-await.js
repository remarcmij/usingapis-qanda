import myVideos from './myVideos.js';
import playVideo from './playVideo.js';

async function bingeWatch(videos) {
  for (const video of videos) {
    await playVideo(video);
  }
}

bingeWatch(myVideos);
