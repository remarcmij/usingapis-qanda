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

export async function fetchSlowAndUnreliably(url) {
  // Exaggerate the slowness of the server/network by delaying for 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Exaggerate the flakiness of the server by failing 25% of the time
  if (Math.random() < 0.25) {
    throw new Error('Server is down');
  }

  // Fetch the data from the cache or the server
  return await fetchCached(url);
}
