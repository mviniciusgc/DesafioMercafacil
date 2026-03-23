import { CharacterProvider } from "../../modules/character/providers/CharacterProvider";
import { CharacterService } from "../../modules/character/services/CharacterService";

export const createContainer = () => {
  const provider = new CharacterProvider();
  const service = new CharacterService(provider);

  return {
    characterService: service,
  };
};