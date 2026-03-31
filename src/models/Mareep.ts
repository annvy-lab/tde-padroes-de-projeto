import { Pokemon } from './Pokemon';

export class Mareep extends Pokemon {
  constructor() {
    super('Mareep', 'Electric');
  }

  attack(): string {
    return `${this.name} usa Thunder Wave!`;
  }
}
