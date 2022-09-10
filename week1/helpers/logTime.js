const logTime = (() => {
  const startTime = Date.now();
  return (...args) => {
    const elapsed = Date.now() - startTime;
    console.log(`${elapsed} ms:`, ...args);
  };
})();

export default logTime;
