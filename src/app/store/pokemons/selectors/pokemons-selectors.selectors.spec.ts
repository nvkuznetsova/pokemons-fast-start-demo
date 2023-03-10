import { Pokemon } from 'src/app/domain/pokemon';
import { State } from '../..';
import * as fromSelectors from './pokemons-selectors.selectors';

describe('PokemonsSelectors Selectors', () => {
  const pokemons: Pokemon[] = [{ id: 1, name: 'test' }, { id: 2, name: 'test1' }];
  const state: State = {
    pokemons: {
      isLoading: false,
      pokemonId: null,
      pokemons,
    },
    router: {} as any
  };

  it('should select the feature state', () => {
    expect(fromSelectors.selectPokemonsState(state)).toEqual(state.pokemons);
  });

  it('should select pokemons list', () => {
    expect(fromSelectors.selectPokemons.projector(state.pokemons)).toEqual(pokemons);
  });

  it('should select pokemons count', () => {
    expect(fromSelectors.selectPokemonsCount.projector(pokemons)).toBe(2);
  });
});
