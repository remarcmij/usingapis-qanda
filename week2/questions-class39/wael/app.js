async function fetchData(url) {
  const response = await fetch(url);
  const parsedData = await response.json();
  if (parsedData.cod) {
    throw new Error(`Server returned ${parsedData.message}`);
  }
  return parsedData;
}

function main() {
  fetchData(
    'https://api.openweathermap.org/data/2.5/weatherx?lat=44.34&lon=10.99&appid=e4f76d8324c52e04224f07a8daf47741'
  )
    .then((parsedData) => {
      console.log('parsedData', parsedData);
      document.querySelector('#container').textContent =
        parsedData.weather[0].description;
    })
    .catch((error) => {
      alert('Error :' + error);
    });
}

main();
