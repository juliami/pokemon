/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  "\n  query getAllPokemonSpecies($limit: Int, $offset: Int) {\n    pokemon_v2_pokemonspecies(\n      order_by: { name: asc }\n      limit: $limit\n      offset: $offset\n    ) {\n      name\n      id\n      pokemon_v2_pokemoncolor {\n        name\n      }\n      pokemon_v2_pokemons {\n        pokemon_v2_pokemonsprites {\n          sprites\n        }\n      }\n    }\n  }\n": typeof types.GetAllPokemonSpeciesDocument;
  "\n  query getPokemonById($id: Int!) {\n    pokemon_v2_pokemonspecies(where: { id: { _eq: $id } }) {\n      name\n      pokemon_v2_pokemoncolor {\n        name\n      }\n      id\n      pokemon_v2_pokemons {\n        weight\n        height\n        pokemon_v2_pokemonsprites {\n          sprites\n        }\n        # Types (eg. 'psychic', 'grass', 'poison')\n        pokemon_v2_pokemontypes {\n          pokemon_v2_type {\n            name\n          }\n        }\n        # Abilities (eg. 'overgrow', 'chlorophyll')\n        pokemon_v2_pokemonabilities {\n          pokemon_v2_ability {\n            name\n          }\n        }\n      }\n      # Pokemon description/flavor text\n      pokemon_v2_pokemonspeciesflavortexts(\n        where: { language_id: { _eq: 9 }, version_id: { _eq: 1 } }\n      ) {\n        flavor_text\n      }\n      # Genus (eg. 'Seed Pokemon', 'Tiny Bird Pokemon')\n      # In English (language_id: 9)\n      pokemon_v2_pokemonspeciesnames(where: { language_id: { _eq: 9 } }) {\n        genus\n      }\n    }\n  }\n": typeof types.GetPokemonByIdDocument;
};
const documents: Documents = {
  "\n  query getAllPokemonSpecies($limit: Int, $offset: Int) {\n    pokemon_v2_pokemonspecies(\n      order_by: { name: asc }\n      limit: $limit\n      offset: $offset\n    ) {\n      name\n      id\n      pokemon_v2_pokemoncolor {\n        name\n      }\n      pokemon_v2_pokemons {\n        pokemon_v2_pokemonsprites {\n          sprites\n        }\n      }\n    }\n  }\n":
    types.GetAllPokemonSpeciesDocument,
  "\n  query getPokemonById($id: Int!) {\n    pokemon_v2_pokemonspecies(where: { id: { _eq: $id } }) {\n      name\n      pokemon_v2_pokemoncolor {\n        name\n      }\n      id\n      pokemon_v2_pokemons {\n        weight\n        height\n        pokemon_v2_pokemonsprites {\n          sprites\n        }\n        # Types (eg. 'psychic', 'grass', 'poison')\n        pokemon_v2_pokemontypes {\n          pokemon_v2_type {\n            name\n          }\n        }\n        # Abilities (eg. 'overgrow', 'chlorophyll')\n        pokemon_v2_pokemonabilities {\n          pokemon_v2_ability {\n            name\n          }\n        }\n      }\n      # Pokemon description/flavor text\n      pokemon_v2_pokemonspeciesflavortexts(\n        where: { language_id: { _eq: 9 }, version_id: { _eq: 1 } }\n      ) {\n        flavor_text\n      }\n      # Genus (eg. 'Seed Pokemon', 'Tiny Bird Pokemon')\n      # In English (language_id: 9)\n      pokemon_v2_pokemonspeciesnames(where: { language_id: { _eq: 9 } }) {\n        genus\n      }\n    }\n  }\n":
    types.GetPokemonByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getAllPokemonSpecies($limit: Int, $offset: Int) {\n    pokemon_v2_pokemonspecies(\n      order_by: { name: asc }\n      limit: $limit\n      offset: $offset\n    ) {\n      name\n      id\n      pokemon_v2_pokemoncolor {\n        name\n      }\n      pokemon_v2_pokemons {\n        pokemon_v2_pokemonsprites {\n          sprites\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query getAllPokemonSpecies($limit: Int, $offset: Int) {\n    pokemon_v2_pokemonspecies(\n      order_by: { name: asc }\n      limit: $limit\n      offset: $offset\n    ) {\n      name\n      id\n      pokemon_v2_pokemoncolor {\n        name\n      }\n      pokemon_v2_pokemons {\n        pokemon_v2_pokemonsprites {\n          sprites\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getPokemonById($id: Int!) {\n    pokemon_v2_pokemonspecies(where: { id: { _eq: $id } }) {\n      name\n      pokemon_v2_pokemoncolor {\n        name\n      }\n      id\n      pokemon_v2_pokemons {\n        weight\n        height\n        pokemon_v2_pokemonsprites {\n          sprites\n        }\n        # Types (eg. 'psychic', 'grass', 'poison')\n        pokemon_v2_pokemontypes {\n          pokemon_v2_type {\n            name\n          }\n        }\n        # Abilities (eg. 'overgrow', 'chlorophyll')\n        pokemon_v2_pokemonabilities {\n          pokemon_v2_ability {\n            name\n          }\n        }\n      }\n      # Pokemon description/flavor text\n      pokemon_v2_pokemonspeciesflavortexts(\n        where: { language_id: { _eq: 9 }, version_id: { _eq: 1 } }\n      ) {\n        flavor_text\n      }\n      # Genus (eg. 'Seed Pokemon', 'Tiny Bird Pokemon')\n      # In English (language_id: 9)\n      pokemon_v2_pokemonspeciesnames(where: { language_id: { _eq: 9 } }) {\n        genus\n      }\n    }\n  }\n",
): (typeof documents)["\n  query getPokemonById($id: Int!) {\n    pokemon_v2_pokemonspecies(where: { id: { _eq: $id } }) {\n      name\n      pokemon_v2_pokemoncolor {\n        name\n      }\n      id\n      pokemon_v2_pokemons {\n        weight\n        height\n        pokemon_v2_pokemonsprites {\n          sprites\n        }\n        # Types (eg. 'psychic', 'grass', 'poison')\n        pokemon_v2_pokemontypes {\n          pokemon_v2_type {\n            name\n          }\n        }\n        # Abilities (eg. 'overgrow', 'chlorophyll')\n        pokemon_v2_pokemonabilities {\n          pokemon_v2_ability {\n            name\n          }\n        }\n      }\n      # Pokemon description/flavor text\n      pokemon_v2_pokemonspeciesflavortexts(\n        where: { language_id: { _eq: 9 }, version_id: { _eq: 1 } }\n      ) {\n        flavor_text\n      }\n      # Genus (eg. 'Seed Pokemon', 'Tiny Bird Pokemon')\n      # In English (language_id: 9)\n      pokemon_v2_pokemonspeciesnames(where: { language_id: { _eq: 9 } }) {\n        genus\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
