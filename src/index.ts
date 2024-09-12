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

    input UserID {
        uid: ID
    }

    type Role {
        name: String
    }

    type Query {
        users: [User]
        user(id: UserID!): [User]
        #user(id: UserID!): User #con find
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
        users: () => users,
        user: (parent, args, context, info) => {
            const { uid } = args.id
            //con filter
           return users.filter((user) => user.id === uid);
           //con find            
           //return users.find((user) => user.id === uid);
          },
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