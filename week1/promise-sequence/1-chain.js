import { AsyncPromise as Promise } from '../../async-promise/async-promise.js';

const playlist = [
  {
    episode: 1,
    title: 'Openings',
    synopsis:
      'Sent to an orphanage at age 9, Beth develops an uncanny knack for chess and a growing dependence on the green tranquilizers given to the children.',
  },
  {
    episode: 2,
    title: 'Exchanges',
    synopsis:
      'Suddenly plunged into a confusing new life in suburbia, teenage Beth studies her high school classmates and hatches a plan to enter a chess tournament.',
  },
  {
    episode: 3,
    title: 'Doubled Pawns',
    synopsis:
      'The trip to Cincinnati launches Beth and her mother into a whirlwind of travel and press coverage. Beth sets her sights on the U.S. open in Las Vegas.',
  },
  {
    episode: 4,
    title: 'Middle Game',
    synopsis:
      'Russian class opens the door to a new social scene. In Mexico City, Beth meets the intimidating Borgov, while her mother cozies up with a pen pal.',
  },
  {
    episode: 5,
    title: 'Fork',
    synopsis:
      'Back home in Kentucky, a shaken Beth reconnects with a former opponent who offers to help sharpen her game ahead of the U.S. Championship.',
  },
  {
    episode: 6,
    title: 'Adjournment',
    synopsis:
      'After training with Benny in New York, Beth heads to Paris for her rematch with Borgov. But a wild night sends her into a self-destructive spiral.',
  },
  {
    episode: 7,
    title: 'End Game',
    synopsis:
      'A visit from an old friend forces Beth to reckon with her past and rethink her priorities, just in time for the biggest match of her life.',
  },
];

function playVideo({ episode, title, synopsis }) {
  return new Promise((resolve) => {
    console.log(`>>> playing episode ${episode}: ${title}`);
    console.log(`>>> synopsis: ${synopsis}`);
    setTimeout(() => {
      console.log(`>>> finished episode ${episode}`);
      resolve();
    }, 1000);
  });
}

function bingeWatch(videos) {
  playVideo(videos[0])
    .then(() => playVideo(videos[1]))
    .then(() => playVideo(videos[2]))
    .then(() => playVideo(videos[3]))
    .then(() => playVideo(videos[4]))
    .then(() => playVideo(videos[5]))
    .then(() => playVideo(videos[6]));
}

bingeWatch(playlist);
