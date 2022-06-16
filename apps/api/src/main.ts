/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Product } from '@acadia/types';
import * as express from 'express';

const app = express();

const products: Product[] = [
  {
    id: '1',
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    price: 1,
    image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  },
  {
    id: '2',
    title: 'Snake',
    description:
      'Snakes are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    price: 2,
    image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  },
];

app.get('/api', (req, res) => {
  res.send({ products });
});

app.get('/api/:id', (req, res) => {
  const product = products.find((x) => x.id === req.params.id);

  res.send({ product });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
