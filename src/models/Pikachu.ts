import { Pokemon } from './Pokemon';

export class Pikachu extends Pokemon {
  constructor() {
    super('Pikachu', 'Electric');
  }

  attack(): string {
    return `${this.name} usa Thunder Shock!`;
  }
}
