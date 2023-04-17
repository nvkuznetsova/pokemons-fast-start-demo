import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './store';
import { selectIsPokemonsLoading } from './store/pokemons/selectors/pokemons-selectors.selectors';
import { getPokemons } from './store/pokemons/actions/pokemons-actions.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemons-fast-start-demo';
  public readonly isLoading$ = this.store.select(selectIsPokemonsLoading);

  constructor(private readonly store: Store<State>) {
    this.store.dispatch(getPokemons({}))
  }
}
