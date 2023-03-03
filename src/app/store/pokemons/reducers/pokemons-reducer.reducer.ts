import { Action, createReducer, on } from '@ngrx/store';
import { Pokemon } from 'src/app/domain/pokemon';
import * as fromPokemonsActions from '../actions/pokemons-actions.actions';

export const pokemonsReducerFeatureKey = 'pokemons';

export interface State {
  isLoading: boolean;
  pokemons: Pokemon[];
  pokemonId: number | null;
}

export const initialState: State = {
  isLoading: false,
  pokemons: [],
  pokemonId: null
};

export const reducer = createReducer(
  initialState,
  on(fromPokemonsActions.getPokemons, fromPokemonsActions.searchPokemons, (state) => ({ ...state, isLoading: true })),
  on(fromPokemonsActions.getPokemonsSuccess, fromPokemonsActions.searchPokemonsSuccess, (state, { data }) => ({ ...state, pokemons: [...data], isLoading: false })),
  on(fromPokemonsActions.getPokemonsFailure, fromPokemonsActions.searchPokemonsFailure, (state) => ({ ...state, isLoading: false }))
);
