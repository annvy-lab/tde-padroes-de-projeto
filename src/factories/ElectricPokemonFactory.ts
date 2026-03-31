import { PokemonFactory } from './PokemonFactory';
import { Pikachu } from '../models/Pikachu';
import { IPokemon } from '../models/Pokemon';

export class ElectricPokemonFactory extends PokemonFactory {
  createPokemon(): IPokemon {
    return new Pikachu();
  }
}
