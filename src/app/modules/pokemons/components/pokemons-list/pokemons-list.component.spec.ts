import { MockStore, getMockStore } from '@ngrx/store/testing';
import { State } from 'src/app/store';
import { getPokemons } from 'src/app/store/pokemons/actions/pokemons-actions.actions';

import { PokemonsListComponent } from './pokemons-list.component';

describe('PokemonsListComponent', () => {
  let component: PokemonsListComponent;
  const { build, store } = setup<PokemonsListComponent>();

  beforeEach(() => {
    component = build();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch getPokemons', () => {
    spyOn(store, 'dispatch');
    component.loadMore();

    expect(store.dispatch).toHaveBeenCalledOnceWith(getPokemons({}));
  });
});

function setup<T>(): { default: () => any; build: () => T; store: MockStore<State>, [key: string]: any } {
  const initialState = { isLoading: false, pokemons: [], pokemonId: null } as unknown as State;
  const store: MockStore<State> = getMockStore({ initialState })
  const builder = {
    store,
    default(): any {
      return builder;
    },
    build(): any {
      return new PokemonsListComponent(store);
    }
  };
  return builder;
}
