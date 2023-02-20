import { PokemonImgPipe } from './pokemon-img.pipe';

describe('PokemonImgPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonImgPipe();
    expect(pipe).toBeTruthy();
  });
});
