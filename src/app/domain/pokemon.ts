export interface Pokemon {
  id: number;
  name: string;
}

export interface MyPokemon extends Pokemon {
  date: Date;
  myPokemonName?: string;
}

export interface PokemonCard extends Pokemon {
  date?: Date;
  myPokemonName?: string;
  pokemonId?: number;
  'my-pokemons'?: MyPokemon[];
}

export interface CreatePokemon {
  name: string;
  date: Date;
  pokemonId: number;
}
