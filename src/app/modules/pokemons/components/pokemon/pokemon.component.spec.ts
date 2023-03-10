import { PokemonComponent } from './pokemon.component';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  const { build } = setup<PokemonComponent>();

  beforeEach(() => {
    component = build();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return isCaught', () => {
    component.pokemon = { id: 123, name: 'test', date: new Date() };

    expect(component.isCaught).toBeTrue();
  });

  it('should return pokemonId', () => {
    component.pokemon = { id: 123, name: 'test' };

    expect(component.pokemonId).toBe(123);
  });

  it('should return pokemon pokemonId', () => {
    component.pokemon = { id: 123, name: 'test', pokemonId: 345 };

    expect(component.pokemonId).toBe(345);
  });

  it('should catch pokemon', () => {
    component.pokemon = { id: 123, name: 'test' };
    spyOn(component.catch, 'emit');

    component.catchPokemon();

    expect(component.catch.emit).toHaveBeenCalledOnceWith(component.pokemon);
  });
});

function setup<T>(): { default: () => any; build: () => T; [key: string]: any } {
  const builder = {
    default(): any {
      return builder;
    },
    build(): any {
      return new PokemonComponent();
    }
  };
  return builder;
}
