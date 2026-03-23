import { ApolloServer } from "@apollo/server";
import { ApolloGateway } from "@apollo/gateway";
import { startStandaloneServer } from "@apollo/server/standalone";
import { IntrospectAndCompose } from "@apollo/gateway";

async function startGateway() {
  const gateway = new ApolloGateway({
    supergraphSdl: new IntrospectAndCompose({
      subgraphs: [
        { name: "content", url: "http://localhost:4001/graphql" },
        { name: "review", url: "http://localhost:4002/graphql" },
      ],
    }),
  });

  const server = new ApolloServer({
    gateway,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Gateway rodando em ${url}`);
}

startGateway();