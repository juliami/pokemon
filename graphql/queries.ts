import { gql } from "@apollo/client";

export const GET_ALL_POKEMONS = gql`
  query getAllPokemonSpecies {
    pokemon_v2_pokemonspecies(order_by: { name: asc }) {
      name
      id
    }
  }
`;

export const GET_POKEMON_BY_ID = gql`
  query getPokemonById($id: Int!) {
    pokemon_v2_pokemonspecies(where: { id: { _eq: $id } }) {
      name
      id
      pokemon_v2_pokemons {
      pokemon_v2_pokemonsprites {
        sprites 
      }
      }
    }
  }
`;