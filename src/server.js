const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers')

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers //imported
});

console.log('Server stating at localhost:4000')
server.start();