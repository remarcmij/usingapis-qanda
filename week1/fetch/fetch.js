const simulatedResponses = [
  {
    page: 1,
    names: [
      'Aleksey',
      'Asiye',
      'Elif',
      'Hikmet',
      'Mohamed',
      'Mohanad',
      'Nida',
      'Nuha',
      'Rediet',
      'Vladimir',
      'Wael',
      'Yusuf',
    ],
    nextUrl: 'https://hello.com?page=2',
  },
  {
    page: 2,
    names: ['Wouter', 'Fede', 'Rob', 'Tjebbe'],
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
