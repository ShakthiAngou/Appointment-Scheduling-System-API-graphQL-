import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { readFileSync } from 'fs';


const port = 4000;
const path = '/graphql'

const app = express()

const typeDefs = gql(readFileSync('./schema.graphql', {encoding: 'utf8'}))

import { resolvers } from './resolvers.js';

let server = null;

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })
  await server.start();
  server.applyMiddleware({ app, path })
}

startServer();
app.listen(port, () => console.info(`Server started on port ${port}`));
