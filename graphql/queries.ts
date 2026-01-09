import { gql } from "@apollo/client";

export const GET_ALL_POKEMONS = gql`
  query getAllPokemonSpecies {
    pokemon_v2_pokemonspecies(order_by: { name: asc }) {
      name
      id
    }
  }
`;
