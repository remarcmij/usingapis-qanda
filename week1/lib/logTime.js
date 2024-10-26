const logTime = (() => {
  const startTime = Date.now();
  return (...args) => {
    const elapsed = Date.now() - startTime;
    console.log(...args, `${elapsed}ms`);
  };
})();

export default logTime;
