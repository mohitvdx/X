import express from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from '@apollo/server/express4';

export async function initServer() {

    const app = express();
    app.use(bodyParser.json());

    const graphqlServer = new ApolloServer({
        typeDefs: `
            type Query {
                hello: String
                helloto(name: String): String
                }
                `,
        resolvers: {
            Query: {
                hello: () => 'Hello world!',
                helloto: (_: any, { name }: any) => `Hello ${name}!`,
            },
        },
    });

    await graphqlServer.start();
    app.use("/graphql", expressMiddleware(graphqlServer)); // a apollo studio opens on localhost:3000/graphql   visible in dev mode

    return app;
}