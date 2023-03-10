import { HttpClient } from '@angular/common/http';
import { cold } from 'jasmine-marbles';
import { Pokemon } from '../domain/pokemon';
import { SpyOf, autoSpy } from '../utils/auto-spy';

import { PokemonsService } from './pokemons.service';

describe('PokemonsService', () => {
  let service: PokemonsService;
  const pokemonsUrl = 'http://localhost:3000';
  const { build, httpClient } = setup<PokemonsService>();

  beforeEach(() => {
    service = build();
  });

  afterEach(() => {
    httpClient.get.calls.reset();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get pokemons', () => {
    const expected: Pokemon[] = [{ id: 1, name: 'test' }, { id: 2, name: 'test1' }];
    httpClient.get.and.returnValue(cold('-a', { a: expected }));

    expect(service.getPokemons()).toBeObservable(cold('-a', { a: expected }));
    expect(httpClient.get).toHaveBeenCalledOnceWith(`${ pokemonsUrl }/pokemons?_start=0&_limit=10&_embed=my-pokemons`);
  });
});

function setup<T>(): { default: () => any; build: () => T; httpClient: SpyOf<HttpClient>, [key: string]: any } {
  const httpClient: SpyOf<HttpClient> = autoSpy(HttpClient);
  const builder = {
    httpClient,
    default(): any {
      return builder;
    },
    build(): any {
      return new PokemonsService(httpClient);
    }
  };
  return builder;
}
