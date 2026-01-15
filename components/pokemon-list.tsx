import { PokemonColorKey } from "@/constants/theme";
import { useGetPokemonsQuery } from "@/hooks/use-get-pokemons-query";
import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import PokemonListItem from "./pokemon-list-item";
import { StyledText } from "./styled-text";

const PokemonList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { data, error, fetchMore, refetch } = useGetPokemonsQuery();

  const fetchNextPage = useCallback(() => {
    if (!data?.pokemon_v2_pokemonspecies) return;
    fetchMore({
      variables: {
        offset: data?.pokemon_v2_pokemonspecies.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          ...prev,
          pokemon_v2_pokemonspecies: [
            ...prev.pokemon_v2_pokemonspecies,
            ...fetchMoreResult.pokemon_v2_pokemonspecies,
          ],
        };
      },
    });
  }, [fetchMore, data]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, [refetch]);

  const pokemons = data?.pokemon_v2_pokemonspecies;

  if (error) return <StyledText>Error: {error.message}</StyledText>;
  if (!pokemons) return <StyledText>No pokemons found</StyledText>;

  return (
    <FlatList
      data={pokemons}
      renderItem={({ item }) => (
        <PokemonListItem
          name={item.name}
          id={item.id}
          color={item.pokemon_v2_pokemoncolor?.name as PokemonColorKey}
          imageUri={
            item.pokemon_v2_pokemons[0].pokemon_v2_pokemonsprites[0].sprites
              .other["official-artwork"].front_default
          }
        />
      )}
      keyExtractor={(item, index) => `${String(item.id)} ${String(index)}`}
      onEndReached={fetchNextPage}
      onRefresh={onRefresh}
      refreshing={refreshing}
      numColumns={2}
      contentContainerStyle={[refreshing && { opacity: 0.3 }]}
      testID="pokemon-list"
    />
  );
};

export default PokemonList;
