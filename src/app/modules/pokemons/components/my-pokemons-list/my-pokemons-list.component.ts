import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MyPokemon } from 'src/app/domain/pokemon';
import { changeMyPokemonName, getMyPokemons } from 'src/app/store/my-pokemons/actions/my-pokemons.actions';
import { State } from 'src/app/store/my-pokemons/reducers/my-pokemons.reducer';
import { selectMyPokemons } from 'src/app/store/my-pokemons/selectors/my-pokemons.selectors';

@Component({
  selector: 'app-my-pokemons-list',
  templateUrl: './my-pokemons-list.component.html',
  styleUrls: ['./my-pokemons-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyPokemonsListComponent implements OnInit {
  public myPokemons$: Observable<MyPokemon[]> = this.store.select(selectMyPokemons);

  constructor(private readonly store: Store<State>) {}

  public ngOnInit(): void {
    this.store.dispatch(getMyPokemons());
  }

  public loadMore(): void {
    this.store.dispatch(getMyPokemons());
  }

  public namePokemon(myPokemon: MyPokemon): void {
    this.store.dispatch(changeMyPokemonName({ pokemon: myPokemon }));
  }
}
