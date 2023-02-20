import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonImg'
})
export class PokemonImgPipe implements PipeTransform {
  transform(id: number): string {
    const imageId = (id <= 720) ? id : id % 100 + 1;
    return `././assets/pokemons/${imageId}.png`
  }
}
