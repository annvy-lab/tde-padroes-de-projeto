import { Pokemon } from './Pokemon';

export class Charmander extends Pokemon {
  constructor() {
    super('Charmander', 'Fire');
  }

  attack(): string {
    return `${this.name} usa Ember!`;
  }
}
