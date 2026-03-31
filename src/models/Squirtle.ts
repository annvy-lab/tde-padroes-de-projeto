import { Pokemon } from './Pokemon';

export class Squirtle extends Pokemon {
  constructor() {
    super('Squirtle', 'Water');
  }

  attack(): string {
    return `${this.name} usa Water Gun!`;
  }
}
