import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PokemonsEffectsEffects } from './pokemons-effects.effects';

describe('PokemonsEffectsEffects', () => {
  let actions$: Observable<any>;
  let effects: PokemonsEffectsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PokemonsEffectsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PokemonsEffectsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
