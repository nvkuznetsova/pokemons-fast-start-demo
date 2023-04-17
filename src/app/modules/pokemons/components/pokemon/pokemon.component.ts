import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyPokemon, Pokemon, PokemonCard } from 'src/app/domain/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  @Input() public pokemon: PokemonCard = {} as PokemonCard;
  @Output() public catch: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();
  @Output() public giveName: EventEmitter<MyPokemon> = new EventEmitter<MyPokemon>();

  public isEdit = false;
  public pokemonName = '';

  public get isCaught(): boolean {
    return !!this.pokemon.date;
  }

  public get pokemonId(): number {
    return this.pokemon?.pokemonId || this.pokemon.id;
  }

  public catchPokemon(): void {
    this.catch.emit(this.pokemon);
  }

  public namePokemon(): void {
    this.isEdit = false;
    this.giveName.emit({
      ...this.pokemon,
      myPokemonName: this.pokemonName
    } as MyPokemon);
  };

  public enableEdit(): void {
    this.isEdit = true;
    this.pokemonName = this.pokemon.myPokemonName || '';
  }
}
