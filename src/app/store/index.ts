import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromPokemons from './pokemons/reducers/pokemons-reducer.reducer';
import * as fromRouter from '@ngrx/router-store';

export const selectRouter = createFeatureSelector<fromRouter.RouterReducerState<any>>('router');

export const {
  selectCurrentRoute, // select the current route
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl, // select the current url
} = fromRouter.getSelectors(selectRouter);


export interface State {
  [fromPokemons.pokemonsReducerFeatureKey]: fromPokemons.State;
  router: fromRouter.RouterReducerState<any>;
}

export const reducers: ActionReducerMap<State> = {
  [fromPokemons.pokemonsReducerFeatureKey]: fromPokemons.reducer,
  router: fromRouter.routerReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
