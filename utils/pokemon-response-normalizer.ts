import { PokemonColors } from "@/constants/theme";
import { GetPokemonByIdQuery } from "@/types/gql/graphql";
import { DetailedPokemonSpecies } from "@/types/pokemon";



export const normalizePokemonResponse = (response: GetPokemonByIdQuery): DetailedPokemonSpecies | null => {
  // Assuming the data structure as the root is pokemon_v2_pokemonspecies and it contains array items
  if (!response || !response.pokemon_v2_pokemonspecies || response.pokemon_v2_pokemonspecies.length === 0) {
    return null;
  }

  const species = response.pokemon_v2_pokemonspecies[0]; // Taking the first one since you query by ID
  const pokemon = species.pokemon_v2_pokemons[0]; // Assuming there's at least one pokemon info

  return {
    name: species.name,
    color: PokemonColors[(species?.pokemon_v2_pokemoncolor?.name || 'white') as keyof typeof PokemonColors],
    id: species.id,
    weight: pokemon.weight ?? 0,
    height: pokemon.height ?? 0,
    imageUri: pokemon.pokemon_v2_pokemonsprites[0].sprites.other['official-artwork'].front_default,
    types: pokemon.pokemon_v2_pokemontypes.map((typeEntry: any) => typeEntry.pokemon_v2_type.name),
    abilities: pokemon.pokemon_v2_pokemonabilities.map((abilityEntry: any) => abilityEntry.pokemon_v2_ability.name),
    genus: species.pokemon_v2_pokemonspeciesnames[0].genus
  };
};