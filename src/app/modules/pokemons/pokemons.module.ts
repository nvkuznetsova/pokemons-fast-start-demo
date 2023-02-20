import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';



@NgModule({
  declarations: [
    PokemonsListComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonsModule { }
