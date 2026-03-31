import { Pokemon } from './Pokemon';

export class Cyndaquil extends Pokemon {
  constructor() {
    super('Cyndaquil', 'Fire');
  }

  attack(): string {
    return `${this.name} usa Flame Wheel!`;
  }
}
