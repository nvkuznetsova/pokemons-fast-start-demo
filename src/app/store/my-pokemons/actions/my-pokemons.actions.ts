import { createAction, props } from '@ngrx/store';
import { MyPokemon } from 'src/app/domain/pokemon';

export const getMyPokemons = createAction(
  '[MyPokemons] Get MyPokemons'
);

export const getMyPokemonsSuccess = createAction(
  '[MyPokemons] Get MyPokemonss Succes',
  props<{ data: MyPokemon[] }>()
);

export const getMyPokemonsFailure = createAction(
  '[MyPokemons] Get MyPokemons Failure',
  props<{ error: any }>()
);
