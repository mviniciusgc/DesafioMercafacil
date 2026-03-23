import { IReviewRepository } from "../interfaces/IReviewRepository";

export class ReviewService {
  constructor(private repository: IReviewRepository) {}

  async createReview(data: any) {
    return this.repository.create(data);
  }

  async getReviews(characterId: string) {
    return this.repository.findByCharacterId(characterId);
  }
}