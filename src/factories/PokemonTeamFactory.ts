import { IPokemon } from '../models/Pokemon';

export type PokemonTeam = {
  teamName: string;
  pokemons: IPokemon[];
};

/**
 * Abstract Factory (abstração da família de produtos).
 * ISP: interface enxuta para criar times completos.
 */
export abstract class PokemonTeamFactory {
  abstract createTeam(): PokemonTeam;
}
