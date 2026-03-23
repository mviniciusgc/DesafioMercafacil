type Context = {
  container: {
    characterService: {
      getCharacter: (id: string) => Promise<any>;
    };
  };
};

export const characterResolver = {
  Query: {
    character: async (_: unknown, { id }: { id: string }, ctx: Context) => {
      return ctx.container.characterService.getCharacter(id);
    },
  },

  Character: {
    __resolveReference: async (ref: { id: string }, ctx: Context) => {
      return ctx.container.characterService.getCharacter(ref.id);
    },
  },
};