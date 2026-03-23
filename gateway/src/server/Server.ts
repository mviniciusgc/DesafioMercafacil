import { ApolloServer } from "@apollo/server";
import { ApolloGateway } from "@apollo/gateway";
import { startStandaloneServer } from "@apollo/server/standalone";
import { IntrospectAndCompose } from "@apollo/gateway";

async function startGateway() {
  const gateway = new ApolloGateway({
    supergraphSdl: new IntrospectAndCompose({
      subgraphs: [
        {
          name: "content",
          url: "http://localhost:4001/graphql",
        },
        // depois vamos adicionar review-service aqui
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