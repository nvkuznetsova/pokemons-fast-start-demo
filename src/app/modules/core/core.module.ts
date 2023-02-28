import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    TabMenuModule,
    FormsModule,
    InputTextModule,
  ],
  exports: [HeaderComponent, SearchComponent]
})
export class CoreModule { }
