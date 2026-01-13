import { GET_ALL_POKEMONS } from "@/graphql/queries";
import { GetAllPokemonSpeciesQuery } from "@/types/gql/graphql";
import { useQuery } from "@apollo/client/react";

export const useGetPokemonsQuery = () =>
  useQuery<GetAllPokemonSpeciesQuery>(GET_ALL_POKEMONS, {
    variables: { limit: 50, offset: 0 },
  });
