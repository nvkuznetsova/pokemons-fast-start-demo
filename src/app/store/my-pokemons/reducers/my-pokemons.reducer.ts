import { Action, createReducer, on } from '@ngrx/store';
import * as fromMyPokemonsActions from '../actions/my-pokemons.actions';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { MyPokemon } from 'src/app/domain/pokemon';


export const myPokemonsFeatureKey = 'myPokemons';

export interface State extends EntityState<MyPokemon> {
  isLoading: boolean;
}

export const adapter: EntityAdapter<MyPokemon> = createEntityAdapter<MyPokemon>();

export const initialState: State = adapter.getInitialState({ isLoading: false });

export const reducer = createReducer(
  initialState,
  on(fromMyPokemonsActions.getMyPokemons, (state) => ({ ...state, isLoading: true })),
  on(fromMyPokemonsActions.getMyPokemonsSuccess, (state, { data }) => adapter.addMany(data, { ...state, isLoading: false })),
  on(fromMyPokemonsActions.getMyPokemonsFailure, (state) => adapter.removeAll({ ...state, isLoading: false })),
  on(fromMyPokemonsActions.changeMyPokemonNameSuccess, (state, { data }) => adapter.updateOne({ id: data.id, changes: data }, state))
);
