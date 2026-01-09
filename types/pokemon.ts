import { GetAllPokemonSpeciesQuery } from './gql/graphql';

export type Pokemon = GetAllPokemonSpeciesQuery['pokemon_v2_pokemonspecies'][number];
