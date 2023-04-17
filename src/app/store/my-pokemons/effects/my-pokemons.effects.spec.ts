import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MyPokemonsEffects } from './my-pokemons.effects';

describe('MyPokemonsEffects', () => {
  let actions$: Observable<any>;
  let effects: MyPokemonsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MyPokemonsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(MyPokemonsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
