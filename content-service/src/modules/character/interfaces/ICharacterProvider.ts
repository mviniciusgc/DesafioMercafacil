export interface ICharacterProvider {
  getCharacterById(id: string): Promise<any>;
}