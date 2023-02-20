import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/domain/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  @Input() public pokemon: Pokemon = {} as Pokemon;
  @Output() public catch: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();

  public catchPokemon(): void {
    this.catch.emit(this.pokemon);
  }
}
