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

  public getPokemons(limit = 10): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(`${ this.pokemonsUrl }/pokemons?_start=0&_limit=${limit}&_embed=my-pokemons`)
  }

  public getMyPokemons(page = 1): Observable<MyPokemon[]> {
    return this.httpClient.get<MyPokemon[]>(`${ this.pokemonsUrl }/my-pokemons?_page=${page}&limit=10`);
  }

  public updateMyPokemon(pokemon: MyPokemon): Observable<MyPokemon> {
    return this.httpClient.put<MyPokemon>(`${ this.pokemonsUrl }/my-pokemons/${pokemon.id}`, pokemon);
  }

  public catchPokemon(pokemon: CreatePokemon): Observable<MyPokemon> {
    return this.httpClient.post<MyPokemon>(`${ this.pokemonsUrl }/my-pokemons`, pokemon);
  }

  public searchPokemons(search: string): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(`${ this.pokemonsUrl }/pokemons?_embed=my-pokemons&q=${search}`);
  }
}
