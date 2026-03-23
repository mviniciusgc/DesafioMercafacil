export interface IReviewRepository {
  create(review: any): Promise<void>;
  findByCharacterId(characterId: string): Promise<any[]>;
}