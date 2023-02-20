import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
