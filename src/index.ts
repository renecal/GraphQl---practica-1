import { ApolloServer } from "@apollo/server";
import  { startStandaloneServer } from "@apollo/server/standalone";

//Type query
const typeDefs  = `#graphql
    type User {
        name: String
        email: String
    }
    type Query {
        users: [User]
    }
`;

// Dataset Users
const users = [
    {
        name: 'John Doe',
        email: 'test@test.cl',
    },
    {
        name: 'Jane Doe',
        email: 'test2@test2,cl',
    }
];

// Resolvers
const resolvers = {
    Query: {
        users: () => users
    }
};

// Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start server
const { url } = await startStandaloneServer( server, {
    listen: {
        port: 4000,
    }
});
console.log(`Server ready at ${url}`);