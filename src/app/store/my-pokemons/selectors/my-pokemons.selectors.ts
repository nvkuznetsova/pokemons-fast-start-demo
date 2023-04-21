import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMyPokemons from '../reducers/my-pokemons.reducer';

export const selectMyPokemonsState = createFeatureSelector<fromMyPokemons.State>(fromMyPokemons.myPokemonsFeatureKey);

export const {
  selectIds: selectMyPokemonsIds,
  selectEntities: selectMyPokemonsEntities,
  selectAll: selectMyPokemons,
  selectTotal: selectMyPokemonsCount,
} = fromMyPokemons.adapter.getSelectors(selectMyPokemonsState);
