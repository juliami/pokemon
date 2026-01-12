import { GetPokemonByIdQuery } from '@/types/gql/graphql';
import { useQuery } from '@apollo/client/react';
import { GET_POKEMON_BY_ID } from '../graphql/queries';

import { DetailedPokemonSpecies } from '@/types';
import { normalizePokemonResponse } from '../utils/pokemon-response-normalizer';

export const useGetPokemonByIdQuery = (id: number) => {
  const { data, error, loading } = useQuery<GetPokemonByIdQuery>(GET_POKEMON_BY_ID, {
    variables: { id },
  });

  const normalizedData: DetailedPokemonSpecies | null = data ? normalizePokemonResponse(data) : null;

  return {
    data: normalizedData,
    error,
    loading,
  };
};