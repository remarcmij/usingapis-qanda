import express from 'express';
import morgan from 'morgan';

const app = express();
const port = 3030;

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   next();
// });

app.use(morgan('tiny'));

app.get('/pokemons', (req, res) => {
  res.sendFile('/pokemons.json', {
    root: '.',
    headers: { ContentType: 'application/json' },
  });
});

app.use(express.static('./public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
