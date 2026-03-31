import { PokemonFactory } from './PokemonFactory';
import { Charmander } from '../models/Charmander';
import { IPokemon } from '../models/Pokemon';

/**
 * SRP: classe focada apenas em criar Pokémon de fogo padrão (Charmander).
 */
export class FirePokemonFactory extends PokemonFactory {
  createPokemon(): IPokemon {
    return new Charmander();
  }
}
