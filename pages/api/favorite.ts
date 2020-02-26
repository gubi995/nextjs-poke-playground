import { NextApiRequest, NextApiResponse } from 'next';
import { writeFileSync, readFileSync } from 'fs';

const DB_PATH = './public/favoritePokemons.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      getMethodHandler(req, res);
      break;

    case 'POST':
      postMethodHandler(req, res);
      break;

    default:
      errorHandler(req, res);
      break;
  }
};

const getMethodHandler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const pokemons = readFileSync(DB_PATH, 'utf8');

    return res.status(200).json({ stat: 'ok', payload: JSON.parse(pokemons) });
  } catch (error) {
    return res.status(404).json({ stat: 'error', message: `No favorite pokemon found` });
  }
};

const postMethodHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { id, name } = req.body;

  if (!id) {
    return res.status(400).json({ stat: 'error', message: 'Pokemon id should be specified' });
  }

  writeFileSync(DB_PATH, JSON.stringify(req.body));

  return res.status(201).json({ stat: 'ok', message: `${name} saved as favorite Pokemon` });
};

const errorHandler = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(400).json({ stat: 'error', message: `${req.method} method is not defined for this endpoint` });
};
