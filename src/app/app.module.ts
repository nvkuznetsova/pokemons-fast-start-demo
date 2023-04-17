import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { PokemonsModule } from './modules/pokemons/pokemons.module';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { PokemonsEffectsEffects } from './store/pokemons/effects/pokemons-effects.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { MyPokemonsEffects } from './store/my-pokemons/effects/my-pokemons.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    PokemonsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : [],
    EffectsModule.forRoot([PokemonsEffectsEffects, MyPokemonsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
