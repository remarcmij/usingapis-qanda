import { playlist, playVideo } from './common.js';

function bingeWatch(videos) {
  playVideo(videos[0], () =>
    playVideo(videos[1], () =>
      playVideo(videos[2], () =>
        playVideo(videos[3], () =>
          playVideo(videos[4], () =>
            playVideo(videos[5], () => playVideo(videos[6], () => {}))
          )
        )
      )
    )
  );
}

bingeWatch(playlist);
