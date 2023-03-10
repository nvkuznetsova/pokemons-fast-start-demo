import { reducer, initialState } from './pokemons-reducer.reducer';
import * as fromPokemonsActions from '../actions/pokemons-actions.actions';
import { Pokemon } from 'src/app/domain/pokemon';

describe('PokemonsReducer Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  it('should update state on getPokemons', () => {
    const expected = { ...initialState, isLoading: true };
    const action = fromPokemonsActions.getPokemons({});

    expect(reducer(initialState, action)).toEqual(expected);
  });

  it('should update state on getPokemonsSuccess', () => {
    const pokemons: Pokemon[] = [{ id: 1, name: 'test' }];
    const prevState = { ...initialState, isLoading: true };
    const expected = { ...initialState, isLoading: false, pokemons };

    expect(reducer(prevState, fromPokemonsActions.getPokemonsSuccess({ data: pokemons }))).toEqual(expected);
  });
});
