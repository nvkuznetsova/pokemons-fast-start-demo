import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromMyPokemonsActions from '../actions/my-pokemons.actions';
import { Store } from '@ngrx/store';
import { State } from '../reducers/my-pokemons.reducer';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { of } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { selectMyPokemonsCount } from '../selectors/my-pokemons.selectors';

@Injectable()
export class MyPokemonsEffects {

  public getMyPokemonsEffect$ = createEffect(() => this.actions$.pipe(
    ofType(fromMyPokemonsActions.getMyPokemons),
    withLatestFrom(this.store.select(selectMyPokemonsCount)),
    switchMap(([, count]) => this.pokemonsService.getMyPokemons(count / 10 + 1).pipe(
      map((data) => fromMyPokemonsActions.getMyPokemonsSuccess({ data })),
      catchError((error) => of(fromMyPokemonsActions.getMyPokemonsFailure({ error })))
    ))
  ));

  public changeMyPokemonNameEffect$ = createEffect(() => this.actions$.pipe(
    ofType(fromMyPokemonsActions.changeMyPokemonName),
    switchMap(({ pokemon }) => this.pokemonsService.updateMyPokemon(pokemon).pipe(
      map((data) => fromMyPokemonsActions.changeMyPokemonNameSuccess({ data })),
      catchError((error) => of(fromMyPokemonsActions.changeMyPokemonNameFailure({ error })))
    ))
  ))


  constructor(
    private actions$: Actions,
    private readonly store: Store<State>,
    private readonly pokemonsService: PokemonsService
  ) {}
}
