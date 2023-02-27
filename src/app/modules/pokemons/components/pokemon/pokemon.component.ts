import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon, PokemonCard } from 'src/app/domain/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  @Input() public pokemon: PokemonCard = {} as PokemonCard;
  @Output() public catch: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();

  public get isCaught(): boolean {
    return !!this.pokemon.date;
  }

  public catchPokemon(): void {
    this.catch.emit(this.pokemon);
  }
}
