import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/domain/pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {
  public pokemons: Pokemon[] = [];

  constructor(private readonly pokemonsService: PokemonsService) {}

  public ngOnInit(): void {
    this.pokemons = this.pokemonsService.getPokemons();
  }

  public loadMore(): void {
    console.log('load more');
  }

  public catchPokemon(pokemon: Pokemon): void {
    this.pokemonsService.catchPokemon(pokemon);
    console.log(this.pokemonsService.getMyPokemons());
  }
}
