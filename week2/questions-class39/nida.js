async function fakeFetch(url) {
  console.log('fetching:', url);
  return {
    ok: true,
    json: () => Promise.resolve('some data'),
  };
}

async function fetchData(url) {
  const response = await fakeFetch('https://hackyourfuture.net');

  if (response.ok) {
    return await response.json();
  }
  throw new Error('Request failed!');
}

async function main() {
  try {
    const data = await fetchData('https://hackyourfuture.net');
    console.log('try:', data);
  } catch (err) {
    console.error('catch:', err.message);
  }
}

main();
