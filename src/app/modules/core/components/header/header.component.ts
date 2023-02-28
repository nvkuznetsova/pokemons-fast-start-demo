import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public menuItems: MenuItem[] = [
    { label: 'Pokemons', routerLink: '/all-pokemons' },
    { label: 'My Pokemons', routerLink: '/my-collection' },
    { label: 'Users', routerLink: '/users' }
  ];
}
