import gql from "graphql-tag";

export const typeDefs = gql`
  type Character @key(fields: "id") {
    id: ID!
    name: String
    status: String
    species: String
  }

  type Query {
    character(id: ID!): Character
  }
`;