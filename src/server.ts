import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    message: String
  }
`;

const resolvers = {
  Query: {
    message: () => '世界でいっしょに気持ちいいことを始めよう！',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
