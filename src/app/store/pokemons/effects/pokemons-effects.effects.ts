import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, delay, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { State } from '../..';
import * as fromPokemonsActions from '../actions/pokemons-actions.actions';
import { selectPokemonsCount } from '../selectors/pokemons-selectors.selectors';


@Injectable()
export class PokemonsEffectsEffects {
  public pokemonsEffect$ = createEffect(() => this.actions$.pipe(
    ofType(fromPokemonsActions.getPokemons),
    withLatestFrom(this.store.select(selectPokemonsCount)),
    delay(1000),
    switchMap(([{ limit }, count]) => this.pokemonsService.getPokemons(limit || count + 10).pipe(
      map((data) => fromPokemonsActions.getPokemonsSuccess({ data })),
      catchError((error) => of(fromPokemonsActions.getPokemonsFailure({ error })))
    ))
  ));

  public getPokemonsSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fromPokemonsActions.getPokemonsSuccess),
    tap(() => console.log('Pokemons loaded'))
  ), { dispatch: false });

  public catchPokemon$ = createEffect(() => this.actions$.pipe(
    ofType(fromPokemonsActions.catchPokemon),
    switchMap(({ pokemon }) => this.pokemonsService.catchPokemon(pokemon).pipe(
      withLatestFrom(this.store.select(selectPokemonsCount)),
      map(([_, limit]) => fromPokemonsActions.getPokemons({ limit })),
      catchError((error) => of(fromPokemonsActions.catchPokemonsFailure({ error })))
    ))
  ));

  public searchPokemons$ = createEffect(() => this.actions$.pipe(
    ofType(fromPokemonsActions.searchPokemons),
    switchMap(({ name }) => this.pokemonsService.searchPokemons(name).pipe(
      map((data) => fromPokemonsActions.searchPokemonsSuccess({ data })),
      catchError((error) => of(fromPokemonsActions.searchPokemonsFailure({ error })))
    ))
  ))

  constructor(private actions$: Actions, private readonly pokemonsService: PokemonsService, private readonly store: Store<State>,) {}
}
