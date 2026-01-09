import { GET_POKEMON_BY_ID } from "@/graphql/queries";
import { GetPokemonByIdQuery } from "@/types";
import { useQuery } from "@apollo/client/react";

export const useGetPokemonByIdQuery = (id: number) =>
  useQuery<GetPokemonByIdQuery>(GET_POKEMON_BY_ID, { variables: { id } });
