import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/domain/pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { SpyOf, autoSpy } from 'src/app/utils/auto-spy';
import * as fromPokemonsActions from '../actions/pokemons-actions.actions';
import { selectPokemonsCount } from '../selectors/pokemons-selectors.selectors';

import { PokemonsEffectsEffects } from './pokemons-effects.effects';

describe('PokemonsEffectsEffects', () => {
  let actions$: Observable<any>;
  let effects: PokemonsEffectsEffects;
  let store: MockStore;
  const pokemonsService: SpyOf<PokemonsService> = autoSpy(PokemonsService);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PokemonsEffectsEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState: { pokemons: [{ id: 1, name: 'test' }] }  }),
        { provide: PokemonsService, useValue: pokemonsService },
      ]
    });

    effects = TestBed.inject(PokemonsEffectsEffects);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('pokemonsEffect$', () => {
    beforeEach(() => {
      actions$ = hot('-a', { a: fromPokemonsActions.getPokemons({}) });
      store.overrideSelector(selectPokemonsCount, 0);
    });

    afterEach(() => {
      pokemonsService.getPokemons.calls.reset();
    });

    it('should dispatch getPokemonsSuccess on success', () => {
      const pokemons: Pokemon[] = [{ id: 1, name: 'test' }];
      pokemonsService.getPokemons.and.returnValue(cold('-a', { a: pokemons }));

      expect(effects.pokemonsEffect$).toBeObservable(cold('--a', { a: fromPokemonsActions.getPokemonsSuccess({ data: pokemons }) }));
      expect(pokemonsService.getPokemons).toHaveBeenCalledOnceWith(10);
    });

    it('should dispatch getPokemonsFailure on error', () => {
      const error = { message: 'error' };
      pokemonsService.getPokemons.and.returnValue(cold('-#', {}, error));

      expect(effects.pokemonsEffect$).toBeObservable(cold('--a', { a: fromPokemonsActions.getPokemonsFailure({ error }) }));
    });

    it('should get pokemons by limit', () => {
      actions$ = hot('-a', { a: fromPokemonsActions.getPokemons({ limit: 5 }) });
      const pokemons: Pokemon[] = [{ id: 1, name: 'test' }];
      pokemonsService.getPokemons.and.returnValue(cold('-a', { a: pokemons }));

      expect(effects.pokemonsEffect$).toBeObservable(cold('--a', { a: fromPokemonsActions.getPokemonsSuccess({ data: pokemons }) }));
      expect(pokemonsService.getPokemons).toHaveBeenCalledOnceWith(5);
    });
  });

  describe('getPokemonsSuccess$', () => {
    it('should not dispatch actions getPokemonsSuccess', () => {
      actions$ = hot('-a', { a: fromPokemonsActions.getPokemonsSuccess({ data: [] }) });

      expect(effects.getPokemonsSuccess$).toBeObservable(cold('-a', { a: fromPokemonsActions.getPokemonsSuccess({ data: [] }) }));
    });
  });
});
