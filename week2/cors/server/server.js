import express from 'express';

const app = express();
const port = 3030;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/pokemons', (req, res) => {
  res.sendFile('/pokemons.json', {
    root: '.',
    headers: { Contenttype: 'application/json' },
  });
});

app.use(express.static('./public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
