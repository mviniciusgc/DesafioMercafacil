import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express4";
import { buildSubgraphSchema } from "@apollo/subgraph";

import { typeDefs } from "../modules/character/types/Types";
import { characterResolver } from "../modules/character/resolvers/CharacterResolver";
import { createContainer } from "../config/container/CreateContainer";

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    schema: buildSubgraphSchema([
      {
        typeDefs,
        resolvers: characterResolver,
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

  app.get("/health", (_req, res) => {
    res.send({ status: "ok" });
  });

  const PORT = 4001;

  app.listen(PORT, () => {
    console.log(`🚀 Content-service rodando em http://localhost:${PORT}/graphql`);
  });
}

startServer();