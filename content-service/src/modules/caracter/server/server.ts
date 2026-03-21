import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
// import { expressMiddleware } from "@apollo/server/express4";

// import { typeDefs } from "./modules/character/types/character.type";
// import { characterResolver } from "./modules/character/resolvers/character.resolver";
// import { createContainer } from "./config/container";

// async function startServer() {
//   const app = express();

//   // Apollo Server
//   const apolloServer = new ApolloServer({
//     typeDefs,
//     resolvers: [characterResolver],
//   });

//   await apolloServer.start();

//   // Middlewares
//   app.use(cors());
//   app.use(express.json());

//   // GraphQL endpoint
//   app.use(
//     "/graphql",
//     expressMiddleware(apolloServer, {
//       context: async () => ({
//         container: createContainer(),
//       }),
//     })
//   );

//   // Health check (diferencial)
//   app.get("/health", (_req, res) => {
//     res.send({ status: "ok" });
//   });

//   const PORT = 4001;

//   app.listen(PORT, () => {
//     console.log(`🚀 Content-service rodando em http://localhost:${PORT}/graphql`);
//   });
// }

// startServer().catch((error) => {
//   console.error("Erro ao iniciar o servidor:", error);
// });