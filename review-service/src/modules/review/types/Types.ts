// review.type.ts
import gql from "graphql-tag";

export const typeDefs = gql`
  type Review {
    id: ID!
    rating: Int
    comment: String
  }

  extend type Character @key(fields: "id") {
    id: ID! @external
    reviews: [Review]
  }

  type Mutation {
    createReview(input: CreateReviewInput!): Boolean
  }

  input CreateReviewInput {
    characterId: ID!
    rating: Int
    comment: String
  }
`;