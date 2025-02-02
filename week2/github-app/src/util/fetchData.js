const cache = {};

export async function fetchStream(url) {
  const res = await fetch(url, {
    headers: { accept: 'application/vnd.github+json' },
  });
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let result = '';

  let count = 0;

  async function read() {
    count += 1;
    const { done, value } = await reader.read();
    if (done) {
      console.log(`Stream completed in ${count} requests.`);
      return;
    }
    result += decoder.decode(value, { stream: true });
    read();
  }

  await read();
  return { data: JSON.parse(result), headers: res.headers };
}

export async function fetchData(url) {
  const res = await fetch(url, {
    headers: {
      accept: 'application/vnd.github+json',
    },
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

  // Uncomment line 50 and comment out line 51 to try out ReadableStream
  // cacheItem = await fetchStream(url);
  cacheItem = await fetchData(url);
  cache[url] = cacheItem;

  return cacheItem;
}

export async function fetchSlowAndUnreliably(url) {
  // Exaggerate the slowness of the server/network by delaying for 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Exaggerate the flakiness of the server by failing some of the time
  if (Math.random() < 0.25) {
    throw new Error('Server is down');
  }

  // Fetch the data from the cache or the server
  return await fetchCached(url);
}
