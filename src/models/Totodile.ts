import { Pokemon } from './Pokemon';

export class Totodile extends Pokemon {
  constructor() {
    super('Totodile', 'Water');
  }

  attack(): string {
    return `${this.name} usa Aqua Jet!`;
  }
}
