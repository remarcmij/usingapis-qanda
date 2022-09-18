async function fetchData() {
  try {
    const fetchedData = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=e4f76d8324c52e04224f07a8daf47741'
    );
    const parsedData = await fetchedData.json();
    document.querySelector('#container').textContent =
      parsedData.weather[0].description;
    return parsedData;
  } catch (error) {
    alert('Error :' + error);
  }
}

fetchData();
