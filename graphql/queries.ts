import { gql } from "@apollo/client";

export const GET_ALL_POKEMONS = gql`
  query getAllPokemonSpecies($limit: Int, $offset: Int) {
    pokemon_v2_pokemonspecies(order_by: { name: asc }, limit: $limit, offset: $offset) {
      name
      id
    }
  }
`;

export const GET_POKEMON_BY_ID = gql`
  query getPokemonById($id: Int!) {
    pokemon_v2_pokemonspecies(where: { id: { _eq:$id  } }) {
     name
    pokemon_v2_pokemoncolor {
      name
    }
    id
    pokemon_v2_pokemons {
      weight
      height
      pokemon_v2_pokemonsprites {
        sprites
      }
      # Types (eg. 'psychic', 'grass', 'poison')
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      # Abilities (eg. 'overgrow', 'chlorophyll')
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
    }
    # Genus (eg. 'Seed Pokemon', 'Tiny Bird Pokemon')
    # In English (language_id: 9)
      pokemon_v2_pokemonspeciesnames(where: {language_id: {_eq: 9}}) {
          genus
        }
  }
    }
`;


