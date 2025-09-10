import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    message: String
  }
`;

const resolvers = {
  Query: {
    message: () => 'こんにちは！ 美紀ちゃん',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
