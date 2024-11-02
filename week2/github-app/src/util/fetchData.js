const cache = {};

export async function fetchData(url) {
  const res = await fetch(url, {
    headers: { accept: 'application/vnd.github+json' },
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}  ${res.statusText}`);
  }

  const data = await res.json();
  return { data, headers: res.headers };
}

export async function fetchCached(url) {
  let cacheItem = cache[url];
  if (cacheItem) {
    return cacheItem;
  }

  cacheItem = await fetchData(url);
  cache[url] = cacheItem;

  return cacheItem;
}

export async function fetchSlowAndUnreliable(url) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // if (Math.random() < 0.4) {
  //   throw new Error('Server is down');
  // }
  return await fetchCached(url);
}
