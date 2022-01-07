const express = require("express");
import { importSchema } from "graphql-import";
import { ApolloServer, gql } from "apollo-server-express";
import resolvers from "./resolvers";
import { setupData } from "./data";

const typeDefs = gql(importSchema("src/graphql/schema.gql")); // Parse schema

const main = async () => {
	const server = new ApolloServer({ typeDefs, resolvers });
	const app = express();
	await server.start();
	server.applyMiddleware({ app });

	app.listen({ port: 3000 }, async () => {
		await setupData();
		console.log(
			`🚀 Server ready at http://localhost:${3000}${server.graphqlPath}`
		);
	});
};

const testMain = () => {};

main();
testMain();
