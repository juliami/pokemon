import { PokemonColorKey } from "@/constants/theme";

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

export type BasicPokemonSpecies = Pick<
  DetailedPokemonSpecies,
  "name" | "color" | "id" | "imageUri"
>;
