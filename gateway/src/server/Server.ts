import { ApolloServer } from "@apollo/server";
import { ApolloGateway } from "@apollo/gateway";
import { startStandaloneServer } from "@apollo/server/standalone";
import { IntrospectAndCompose } from "@apollo/gateway";

async function startGateway() {
  
const isDocker = process.env.RUNNING_IN_DOCKER === "true";

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      {
        name: "content",
        url: isDocker
          ? "http://content-service:4001/graphql"
          : "http://localhost:4001/graphql",
      },
      {
        name: "review",
        url: isDocker
          ? "http://review-service:4002/graphql"
          : "http://localhost:4002/graphql",
      },
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