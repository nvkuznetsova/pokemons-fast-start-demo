import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPokemons from '../reducers/pokemons-reducer.reducer';

export const selectPokemonsState = createFeatureSelector<fromPokemons.State>(fromPokemons.pokemonsReducerFeatureKey);

export const selectIsPokemonsLoading = createSelector(
  selectPokemonsState,
  (state) => state.isLoading
);

export const selectPokemons = createSelector(
  selectPokemonsState,
  (state) => state.pokemons
);

export const selectPokemonsCount = createSelector(
  selectPokemons,
  (pokemons) => pokemons.length
);
