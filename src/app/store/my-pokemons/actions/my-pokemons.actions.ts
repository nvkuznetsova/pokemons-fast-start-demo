import { createAction, props } from '@ngrx/store';
import { MyPokemon } from 'src/app/domain/pokemon';

export const getMyPokemons = createAction(
  '[MyPokemons] Get MyPokemons'
);

export const getMyPokemonsSuccess = createAction(
  '[MyPokemons] Get MyPokemons Succes',
  props<{ data: MyPokemon[] }>()
);

export const getMyPokemonsFailure = createAction(
  '[MyPokemons] Get MyPokemons Failure',
  props<{ error: any }>()
);

export const changeMyPokemonName = createAction(
  '[MyPokemons] Change My Pokemon Name',
  props<{ pokemon: MyPokemon }>()
);

export const changeMyPokemonNameSuccess = createAction(
  '[MyPokemons] Change My Pokemon Name Success',
  props<{ data: MyPokemon }>()
);

export const changeMyPokemonNameFailure = createAction(
  '[MyPokemons] Change My Pokemon Name Failure',
  props<{ error: any }>()
);
