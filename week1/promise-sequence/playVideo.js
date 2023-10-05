function playVideo(video) {
  return new Promise((resolve) => {
    console.log(`\nPlaying ${video}`);
    setTimeout(() => {
      console.log(`Watched ${video}`);
      resolve();
    }, 1000);
  });
}

export default playVideo;
