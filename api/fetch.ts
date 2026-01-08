import { Pokemon } from "@/types";
import { gql } from "graphql-request";
import { graphQLClient } from "./client";

const gqlQuery = gql`
  query {
    pokemon_v2_pokemonspecies(order_by: { name: asc }) {
      name
      id
    }
  }
`;
export async function getPokemons(): Promise<Pokemon[]> {
  const data = await graphQLClient.request<any>(gqlQuery);

  return data.pokemon_v2_pokemonspecies;
}
