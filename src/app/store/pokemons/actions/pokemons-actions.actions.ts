import { createAction, props } from '@ngrx/store';
import { CreatePokemon, Pokemon } from 'src/app/domain/pokemon';

export const getPokemons = createAction(
  '[Pokemons] Get Pokemon',
  props<{ limit?: number }>()
);

export const getPokemonsSuccess = createAction(
  '[Pokemons] Get Pokemons Success',
  props<{ data: Pokemon[] }>()
);

export const getPokemonsFailure = createAction(
  '[Pokemons] Get Pokemons Failure',
  props<{ error: any }>()
);

export const catchPokemon = createAction(
  '[Pokemons] Catch Pokemon',
  props<{ pokemon: CreatePokemon }>()
);

export const catchPokemonsFailure = createAction(
  '[Pokemons] Catch Pokemon Failure',
  props<{ error: any }>()
);

export const searchPokemons = createAction(
  '[Pokemons] Search Pokemons',
  props<{ name: string }>()
);

export const searchPokemonsSuccess = createAction(
  '[Pokemons] Search Pokemons Success',
  props<{ data: Pokemon[] }>()
);

export const searchPokemonsFailure = createAction(
  '[Pokemons] Search Pokemons Failure',
  props<{ error: any }>()
);
