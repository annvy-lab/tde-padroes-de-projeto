import { PokemonFactory } from './factories/PokemonFactory';
import { FirePokemonFactory } from './factories/FirePokemonFactory';
import { WaterPokemonFactory } from './factories/WaterPokemonFactory';
import { ElectricPokemonFactory } from './factories/ElectricPokemonFactory';
import { KantoTeamFactory } from './factories/KantoTeamFactory';
import { JohtoTeamFactory } from './factories/JohtoTeamFactory';
import { PokemonTeamFactory } from './factories/PokemonTeamFactory';
import { PokemonDatabase } from './database/PokemonDatabase';
import { IPokemon } from './models/Pokemon';

// DIP: dependemos da abstração PokemonFactory.
function createPokemonWithFactory(factory: PokemonFactory): IPokemon {
  const pokemon = factory.createPokemon(); // Factory Method em ação
  console.log(`Pokemon criado: ${pokemon.name}`);
  return pokemon;
}

function addTeamToDatabase(teamFactory: PokemonTeamFactory, database: PokemonDatabase): void {
  const team = teamFactory.createTeam(); // Abstract Factory em ação
  console.log(`\nTime criado: ${team.teamName}`);

  team.pokemons.forEach((pokemon) => {
    console.log(`- ${pokemon.name} (${pokemon.type})`);
    database.addPokemon(pokemon);
  });
}

function main(): void {
  const database = PokemonDatabase.getInstance(); // Singleton em ação

  const fireFactory = new FirePokemonFactory();
  const waterFactory = new WaterPokemonFactory();
  const electricFactory = new ElectricPokemonFactory();

  const charmander = createPokemonWithFactory(fireFactory);
  const squirtle = createPokemonWithFactory(waterFactory);
  const pikachu = createPokemonWithFactory(electricFactory);

  database.addPokemon(charmander);
  database.addPokemon(squirtle);
  database.addPokemon(pikachu);

  // LSP: qualquer implementação de IPokemon pode ser usada igualmente.
  console.log('\nAtaques dos Pokemons criados via Factory Method:');
  [charmander, squirtle, pikachu].forEach((pokemon) => {
    console.log(pokemon.attack());
  });

  const kantoTeamFactory = new KantoTeamFactory();
  const johtoTeamFactory = new JohtoTeamFactory();

  addTeamToDatabase(kantoTeamFactory, database);
  addTeamToDatabase(johtoTeamFactory, database);

  console.log('\nLista de Pokemons no banco:');
  database.listPokemons().forEach((pokemon) => {
    console.log(pokemon.name);
  });
}

main();
