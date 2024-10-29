export function displayResult(fn, thenOrCatch, promiseResult) {
  const code = fn.toString();

  let promiseType = 'Promise.?unknown?';
  if (code.includes('Promise.allSettled')) {
    promiseType = 'Promise.allSettled()';
  } else if (code.includes('Promise.all')) {
    promiseType = 'Promise.all()';
  } else if (code.includes('Promise.any')) {
    promiseType = 'Promise.any()';
  } else if (code.includes('Promise.race')) {
    promiseType = 'Promise.race()';
  }
  let message = promiseType + thenOrCatch + ' ';
  if (Array.isArray(promiseResult)) {
    message +=
      '[' +
      promiseResult
        .map((val) => JSON.stringify(val))
        .join(', ')
        .replaceAll('"', '') +
      ']';
  } else {
    message += promiseResult;
  }
  document.querySelector('#message').textContent = message;
}
