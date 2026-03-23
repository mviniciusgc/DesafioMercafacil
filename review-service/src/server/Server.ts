import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { expressMiddleware } from "@as-integrations/express4";

import { typeDefs } from "../modules/review/types/Types";
import { reviewResolver } from "../modules/review/resolvers/ReviewResolver";
import { createContainer } from "../config/container/CreateContainer";

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    schema: buildSubgraphSchema([
      {
        typeDefs,
        resolvers: reviewResolver as any,
      },
    ]),
  });

  await server.start();

  app.use(cors());
  app.use(express.json());

  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: async () => ({
        container: createContainer(),
      }),
    })
  );

  app.listen(4002, () => {
    console.log("🚀 Review-service rodando na porta 4002");
  });
}

startServer();