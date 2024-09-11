//Tipo query
const typeDefs  = `#graphql
    type User {
        name: String
        email: String
    }
    type Query {
        users: User
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
        users: () => users[0]
    }
};
