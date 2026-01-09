import { GET_ALL_POKEMONS } from "@/graphql/queries";
import { GetAllPokemonSpeciesQuery } from "@/types";
import { useQuery } from "@apollo/client/react";

export const useGetPokemonsQuery = () =>
  useQuery<GetAllPokemonSpeciesQuery>(GET_ALL_POKEMONS, {variables: { limit: 10, offset: 0 }, notifyOnNetworkStatusChange: true});
