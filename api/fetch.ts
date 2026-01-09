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


export async function getPokemonById(id: number): Promise<Pokemon> {

const query = gql`
  query {
    pokemon_v2_pokemonspecies(
        where: {pokemon_v2_generation: {id: {_eq: ${id}}}}
 
  }
`;


  const data = await graphQLClient.request<any>(query);
    console.log(data);
  return data.pokemon_v2_pokemonspecies;
}
