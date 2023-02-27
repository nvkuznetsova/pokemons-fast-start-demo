import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PokemonsComponent } from './pokemons.component';
import { PokemonImgPipe } from './pipes/pokemon-img.pipe';
import { HighlightEvenDirective } from './directives/highlight-even.directive';
import { MyPokemonsListComponent } from './components/my-pokemons-list/my-pokemons-list.component';
import { PokemonsRoutingModule } from './pokemons-routing.module';



@NgModule({
  declarations: [
    PokemonsListComponent,
    PokemonComponent,
    PokemonsComponent,
    PokemonImgPipe,
    HighlightEvenDirective,
    MyPokemonsListComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    PokemonsRoutingModule,
  ],
  exports: [PokemonsComponent]
})
export class PokemonsModule { }
