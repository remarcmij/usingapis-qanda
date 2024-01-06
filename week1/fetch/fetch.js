const simulatedResponses = [
  {
    page: 1,
    names: [
      'Tenzin',
      'Erhan',
      'Mariam',
      'Wajahat',
      'Burhan',
      'Ali',
      'Ahmad',
      'Fressia',
      'Islam',
    ],
    nextUrl: 'https://hello.com?page=2',
  },
  {
    page: 2,
    names: ['Stas', 'Joséphine', 'Cindy', 'Giuseppina'],
  },
];

function fetch(url) {
  console.log(`\nfetching: ${url}`);

  return new Promise((resolve, reject) => {
    const [, param] = url.split('=');
    const index = parseInt(param, 10) || 1;
    setTimeout(() => {
      const response = simulatedResponses[index - 1];
      resolve(response);
      // reject(new Error('fetched failed'));
    }, 2000);
  });
}

export default fetch;
