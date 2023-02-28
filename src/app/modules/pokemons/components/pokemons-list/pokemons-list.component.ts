import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, filter, merge, Observable, of, Subject, switchMap, take, tap } from 'rxjs';
import { CreatePokemon, Pokemon } from 'src/app/domain/pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonsListComponent implements OnInit {
  private refresh$: BehaviorSubject<number> = new BehaviorSubject<number>(10);
  private search$: Subject<Pokemon[]> = new Subject<Pokemon[]>();
  public pokemons$: Observable<Pokemon[]> = merge(
    this.refresh$.pipe(switchMap((limit) => this.pokemonsService.getPokemons(limit))),
    this.search$
  );

  constructor(private readonly pokemonsService: PokemonsService) {}

  public ngOnInit(): void {
    // this.pokemons = this.pokemonsService.getPokemons();
  }

  public loadMore(currentLength: number): void {
    console.log('load more');
    this.refresh$.next(currentLength + 10)
  }

  public catchPokemon(pokemon: Pokemon, currentLength: number): void {
    const newPokemon: CreatePokemon = {
      name: pokemon.name,
      date: new Date(),
      pokemonId: pokemon.id
    };
    this.pokemonsService.catchPokemon(newPokemon).pipe(
      take(1),
      tap(() => this.refresh$.next(currentLength))
    ).subscribe();
    console.log(this.pokemonsService.getMyPokemons());
  }

  public onSearch(text: string): void {
    of(text).pipe(
      debounceTime(250),
      filter((value) => !!value && value.length >= 3),
      distinctUntilChanged(),
      switchMap((value) => this.pokemonsService.searchPokemons(value.toLowerCase()).pipe(
        tap((pokemons) => this.search$.next(pokemons))
      ))
    ).subscribe();
  }
}
