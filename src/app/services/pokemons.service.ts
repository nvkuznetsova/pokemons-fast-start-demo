import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatePokemon, MyPokemon, Pokemon } from '../domain/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private readonly pokemonsUrl = 'http://localhost:3000';

  constructor(private readonly httpClient: HttpClient) { }

  public getPokemons(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(`${ this.pokemonsUrl }/pokemons?_embed=my-pokemons`)
  }

  public getMyPokemons(): Observable<MyPokemon[]> {
    return this.httpClient.get<MyPokemon[]>(`${ this.pokemonsUrl }/my-pokemons`)
  }

  public catchPokemon(pokemon: CreatePokemon): Observable<MyPokemon> {
    return this.httpClient.post<MyPokemon>(`${ this.pokemonsUrl }/my-pokemons`, pokemon);
  }
}
