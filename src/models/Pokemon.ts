/**
 * ISP: interface pequena e específica para todos os Pokémons.
 */
export interface IPokemon {
  readonly name: string;
  readonly type: string;
  attack(): string;
}

/**
 * Classe base abstrata.
 * LSP: qualquer classe filha pode substituir Pokemon sem quebrar o código cliente.
 */
export abstract class Pokemon implements IPokemon {
  constructor(public readonly name: string, public readonly type: string) {}

  abstract attack(): string;
}
