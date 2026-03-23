import { IReviewRepository } from "../interfaces/IReviewRepository";

const reviews: any[] = [];

export class ReviewRepository implements IReviewRepository {
  async create(review: any) {
    reviews.push(review);
  }

  async findByCharacterId(characterId: string) {
    return reviews.filter(r => r.characterId === characterId);
  }
}