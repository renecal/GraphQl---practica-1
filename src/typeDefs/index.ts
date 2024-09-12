export const typeDefs  = `#graphql
    input UserID {
        uid: ID
    }

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
        user(id: UserID!): [User]
        #user(id: UserID!): User #con find
    }
`;