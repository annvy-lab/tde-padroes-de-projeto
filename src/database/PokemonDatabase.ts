import { IPokemon } from '../models/Pokemon';

/**
 * Singleton: uma única instância do banco em memória.
 * SRP: responsabilidade exclusiva de armazenar e listar Pokémons.
 */
export class PokemonDatabase {
  private static instance: PokemonDatabase;
  private readonly pokemons: IPokemon[] = [];

  private constructor() {}

  static getInstance(): PokemonDatabase {
    if (!PokemonDatabase.instance) {
      PokemonDatabase.instance = new PokemonDatabase();
    }

    return PokemonDatabase.instance;
  }

  addPokemon(pokemon: IPokemon): void {
    this.pokemons.push(pokemon);
  }

  listPokemons(): IPokemon[] {
    return [...this.pokemons];
  }
}
