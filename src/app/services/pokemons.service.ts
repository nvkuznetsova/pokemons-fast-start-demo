import { Injectable } from '@angular/core';
import { MyPokemon, Pokemon } from '../domain/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private pokemons: Pokemon[] = [{
    name: "bulbasaur",
    id: 1,
  },
  {
    name: "ivysaur",
    id: 2
  },
  {
    name: "venusaur",
    id: 3
  },
  {
    name: "charmander",
    id: 4
  },
  {
    name: "charmeleon",
    id: 5
  },
  {
    name: "charizard",
    id: 6
  },
  {
    name: "squirtle",
    id: 7
  },
  {
    name: "wartortle",
    id: 8
  },
  {
    name: "blastoise",
    id: 9
  },
  {
    name: "caterpie",
    id: 10
  }];

  private myPokemons: MyPokemon[] = [];

  constructor() { }

  public getPokemons(): Pokemon[] {
    return this.pokemons;
  }

  public getMyPokemons(): MyPokemon[] {
    return this.myPokemons;
  }

  public catchPokemon(pokemon: Pokemon): void {
    this.myPokemons.push({
      ...pokemon,
      date: new Date(),
    })
  }
}
