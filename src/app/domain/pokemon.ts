export interface Pokemon {
  id: number;
  name: string;
};

export interface MyPokemon extends Pokemon {
  date: Date;
}

export interface PokemonCard extends Pokemon {
  date?: Date;
}
