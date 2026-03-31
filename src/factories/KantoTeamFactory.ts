import { PokemonTeam, PokemonTeamFactory } from './PokemonTeamFactory';
import { Charmander } from '../models/Charmander';
import { Squirtle } from '../models/Squirtle';
import { Pikachu } from '../models/Pikachu';

/**
 * Abstract Factory concreto da família Kanto.
 */
export class KantoTeamFactory extends PokemonTeamFactory {
  createTeam(): PokemonTeam {
    return {
      teamName: 'Kanto Team',
      pokemons: [new Charmander(), new Squirtle(), new Pikachu()]
    };
  }
}
