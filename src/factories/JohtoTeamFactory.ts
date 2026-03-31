import { PokemonTeam, PokemonTeamFactory } from './PokemonTeamFactory';
import { Cyndaquil } from '../models/Cyndaquil';
import { Totodile } from '../models/Totodile';
import { Mareep } from '../models/Mareep';

/**
 * Abstract Factory concreto da família Johto.
 */
export class JohtoTeamFactory extends PokemonTeamFactory {
  createTeam(): PokemonTeam {
    return {
      teamName: 'Johto Team',
      pokemons: [new Cyndaquil(), new Totodile(), new Mareep()]
    };
  }
}
