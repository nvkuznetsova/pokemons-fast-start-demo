export interface Pokemon {
  id: number;
  name: string;
};

export interface MyPokemon extends Pokemon {
  date: Date;
}

export interface PokemonCard extends Pokemon {
  date?: Date;
  'my-pokemons'?: MyPokemon[];
  pokemonId?: number;
}

export interface CreatePokemon {
  name: string;
  date: Date;
  pokemonId: number;
}
