import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, filter, Observable, of, tap } from 'rxjs';
import { CreatePokemon, Pokemon } from 'src/app/domain/pokemon';
import { State } from 'src/app/store';
import { catchPokemon, getPokemons, searchPokemons } from 'src/app/store/pokemons/actions/pokemons-actions.actions';
import { selectPokemons } from 'src/app/store/pokemons/selectors/pokemons-selectors.selectors';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonsListComponent implements OnInit {
  public pokemons$: Observable<Pokemon[]> = this.store.select(selectPokemons);

  constructor(private readonly store: Store<State>) {}

  public ngOnInit(): void {
    this.store.dispatch(getPokemons({}))
  }

  public loadMore(): void {
    this.store.dispatch(getPokemons({}))
  }

  public catchPokemon(pokemon: Pokemon, currentLength: number): void {
    const newPokemon: CreatePokemon = {
      name: pokemon.name,
      date: new Date(),
      pokemonId: pokemon.id
    };
    this.store.dispatch(catchPokemon({ pokemon: newPokemon }));
  }

  public onSearch(text: string): void {
    of(text).pipe(
      debounceTime(250),
      filter((value) => !!value && value.length >= 3),
      distinctUntilChanged(),
      tap((value) => this.store.dispatch(searchPokemons({ name: value.toLowerCase() })))
    ).subscribe();
  }
}
