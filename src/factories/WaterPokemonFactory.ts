import { PokemonFactory } from './PokemonFactory';
import { Squirtle } from '../models/Squirtle';
import { IPokemon } from '../models/Pokemon';

export class WaterPokemonFactory extends PokemonFactory {
  createPokemon(): IPokemon {
    return new Squirtle();
  }
}
