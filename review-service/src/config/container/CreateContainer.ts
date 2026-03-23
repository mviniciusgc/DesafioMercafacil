import { ReviewRepository } from "../../modules/review/repositories/ReviewRepository";
import { ReviewService } from "../../modules/review/services/ReviewService";

export const createContainer = () => {
  const repository = new ReviewRepository();
  const service = new ReviewService(repository);

  return {
    reviewService: service,
  };
};