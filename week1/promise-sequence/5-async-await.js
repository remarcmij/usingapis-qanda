import { playlist, playVideo } from './common.js';

async function bingeWatch(videos) {
  for (const video of videos) {
    await playVideo(video);
  }
}

bingeWatch(playlist);
