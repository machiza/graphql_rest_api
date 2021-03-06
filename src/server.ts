import 'reflect-metadata';
import express, { Request, Response } from 'express';
import 'express-async-errors';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';
import { routes } from 'routes';

import { makeExecutableSchema } from '@graphql-tools/schema';

import resolvers from './resolvers';
import typeDefs from './schemas';

mongoose.connect('mongodb://localhost:27017/code_drops');

const app = express();

app.use(express.json());

app.use(routes);

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.use((error: Error, request: Request, response: Response) => {
  if (error instanceof Error) {
    return response.status(400).json(error.message);
  }

  return error;
});

app.listen(3333, () => console.log('Server is running'));
