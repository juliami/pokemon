import { gql } from "@apollo/client";

export const GET_ALL_POKEMONS = gql`
  query getAllPokemonSpecies($limit: Int, $offset: Int) {
    pokemon_v2_pokemonspecies(order_by: { name: asc }, limit: $limit, offset: $offset) {
      name
      id
    }
  }
`;
