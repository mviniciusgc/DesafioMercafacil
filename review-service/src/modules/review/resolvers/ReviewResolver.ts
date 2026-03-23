import { ReviewService } from "../services/ReviewService";

type Context = {
  container: {
    reviewService: ReviewService;
  };
};

export const reviewResolver = {
  Mutation: {
    createReview: async (_: unknown, { input }: any, ctx: Context) => {
      await ctx.container.reviewService.createReview(input);
      return true;
    },
  },

  Character: {
    reviews: async (character: any, _: unknown, ctx: Context) => {
      return ctx.container.reviewService.getReviews(character.id);
    },
  },
};