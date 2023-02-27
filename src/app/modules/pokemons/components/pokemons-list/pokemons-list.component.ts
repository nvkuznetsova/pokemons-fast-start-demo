import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, take, tap } from 'rxjs';
import { CreatePokemon, Pokemon } from 'src/app/domain/pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonsListComponent implements OnInit {
  private refresh$: BehaviorSubject<void> = new BehaviorSubject<void>(undefined);
  public pokemons$: Observable<Pokemon[]> = this.refresh$.pipe(
    switchMap(() => this.pokemonsService.getPokemons())
  );

  constructor(private readonly pokemonsService: PokemonsService) {}

  public ngOnInit(): void {
    // this.pokemons = this.pokemonsService.getPokemons();
  }

  public loadMore(): void {
    console.log('load more');
  }

  public catchPokemon(pokemon: Pokemon): void {
    const newPokemon: CreatePokemon = {
      name: pokemon.name,
      date: new Date(),
      pokemonId: pokemon.id
    };
    this.pokemonsService.catchPokemon(newPokemon).pipe(
      take(1),
      tap(() => this.refresh$.next())
    ).subscribe();
    console.log(this.pokemonsService.getMyPokemons());
  }
}
