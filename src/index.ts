import { ApolloServer } from "@apollo/server";
import  { startStandaloneServer } from "@apollo/server/standalone";
import { v4 as uuid } from "uuid";

//Type query
const typeDefs  = `#graphql
    type User {
        id: ID
        name: String
        email: String
        role: Role
    }

    type Role {
        name: String
    }

    type Query {
        users: [User]
        roles: [Role]
    }
`;

// Dataset Users
const users = [
    {  id: uuid(),
        name: 'Rene c',
        email: 'test@test.cl',
        role:{
            name: "admin"
        }
    },
    {
        id: uuid(),
        name: 'Jane Doe',
        email: 'test2@test2,cl',
        role:{
            name: "user"
        }
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