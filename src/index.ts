import { ApolloServer } from "@apollo/server";
import  { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./typeDefs";
import{ resolvers } from "./resolvers"; 

// Resolvers


// Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start server
const { url } = await startStandaloneServer( server, {
    listen: {
        port: 4000, 
    }
});
console.log(`Server ready at ${url}`);