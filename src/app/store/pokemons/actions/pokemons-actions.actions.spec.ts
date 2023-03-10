import * as fromActions from './pokemons-actions.actions';

describe('Pokemons actions', () => {
  it('should getPokemons', () => {
    expect(fromActions.getPokemons({}).type).toBe('[Pokemons] Get Pokemon');
  });

  it('should getPokemonsSuccess', () => {
    expect(fromActions.getPokemonsSuccess({ data: [] }).type).toBe('[Pokemons] Get Pokemons Success');
  });
});
