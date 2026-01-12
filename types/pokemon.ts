import { PokemonColorKey } from "@/constants/theme";
import { GetAllPokemonSpeciesQuery } from "./gql/graphql";

export type BasicPokemonSpecies =
  GetAllPokemonSpeciesQuery["pokemon_v2_pokemonspecies"][number];

export type DetailedPokemonSpecies = {
  name: string;
  color: PokemonColorKey;
  id: number;
  weight: number;
  height: number;
  imageUri: string;
  types: string[];
  abilities: string[];
  genus: string;
  flavorText: string;
};
