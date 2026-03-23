// character.service.ts
import { ICharacterProvider } from "../interfaces/ICharacterProvider";

export class CharacterService {
  constructor(private provider: ICharacterProvider) {}

  async getCharacter(id: string) {
    return this.provider.getCharacterById(id);
  }
}