const cache = {};

export async function fetchData(url) {
  const res = await fetch(url, {
    headers: { accept: 'application/vnd.github+json' },
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}  ${res.statusText}`);
  }

  return res.json();
}

export async function fetchCached(url) {
  let data = cache[url];
  if (data) {
    return data;
  }

  data = await fetchData(url);
  cache[url] = data;

  return data;
}

export async function fetchSlowAndUnreliable(url) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  if (Math.random() < 0.4) {
    throw new Error('Server is down');
  }
  return await fetchCached(url);
}
