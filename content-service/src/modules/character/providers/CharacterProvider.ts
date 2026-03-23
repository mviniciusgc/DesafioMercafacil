// character.provider.ts
import axios from "axios";
import { ICharacterProvider } from "../interfaces/ICharacterProvider";

export class CharacterProvider implements ICharacterProvider {
  async getCharacterById(id: string) {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    return response.data;
  }
}