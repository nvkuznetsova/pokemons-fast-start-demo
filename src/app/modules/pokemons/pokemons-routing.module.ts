import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPokemonsListComponent } from './components/my-pokemons-list/my-pokemons-list.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemonsComponent } from './pokemons.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/all-pokemons' },
  {
    path: '',
    component: PokemonsComponent,
    children: [
      { path: 'all-pokemons', component: PokemonsListComponent },
      { path: 'my-collection', component: MyPokemonsListComponent }
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
