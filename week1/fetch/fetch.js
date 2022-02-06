const simulatedResponses = [
  {
    page: 1,
    names: [
      'Ali',
      'Aykut',
      'Burak',
      'Huseyn',
      'Mohammed',
      'Sina',
      'Samer',
      'Ensar',
      'Talha',
      'Onur',
    ],
    nextUrl: 'https://hello.com?page=2',
  },
  {
    page: 2,
    names: ['Ertuğrul', 'Fedor'],
  },
];

function fetch(url) {
  console.log(`\nfetching: ${url}`);

  return new Promise((resolve, reject) => {
    const [, param] = url.split('=');
    const index = parseInt(param, 10) || 1;
    setTimeout(() => {
      // const response = simulatedResponses[index - 1];
      // resolve(response);
      reject(new Error('fetched failed'));
    }, 2000);
  });
}

export default fetch;
