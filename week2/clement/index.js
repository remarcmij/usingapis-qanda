const fetchData = (what, howMany) => {
  fetch(`https://pokeapi.co/api/v2/${what}/?limit=${howMany}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
fetchData('pokemon', 5);
