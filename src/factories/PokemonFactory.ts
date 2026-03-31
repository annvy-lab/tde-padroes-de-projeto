import { IPokemon } from '../models/Pokemon';

/**
 * Factory Method (abstração).
 * DIP: clientes dependem desta abstração, não de fábricas concretas.
 */
export abstract class PokemonFactory {
  abstract createPokemon(): IPokemon;
}
