let timerCount = 0;

export function setTimeoutWrapper(callback, delay) {
  timerCount += 1;
  console.log(`[timer#${timerCount} created]`);
  setTimeout(() => {
    console.log(`[timer#${timerCount} start]`);
    callback();
    console.log(`[timer#${timerCount} exit]`);
  }, delay);
}
