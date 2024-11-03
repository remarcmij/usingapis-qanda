async function fetchData() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=5');
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
}

async function main() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
