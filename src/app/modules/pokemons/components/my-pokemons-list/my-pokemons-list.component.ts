import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyPokemon } from 'src/app/domain/pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-my-pokemons-list',
  templateUrl: './my-pokemons-list.component.html',
  styleUrls: ['./my-pokemons-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyPokemonsListComponent implements OnInit {
  public myPokemons$: Observable<MyPokemon[]> = this.pokemonsService.getMyPokemons();

  constructor(private readonly pokemonsService: PokemonsService) {}

  public ngOnInit(): void {
    // this.myPokemons = this.pokemonsService.getMyPokemons();
  }

  public loadMore(): void {
    console.log('load more');
  }
}
