import { useGetPokemonsQuery } from "@/hooks/use-get-pokemons-query";
import { useCallback, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
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
    <>
      <FlatList
        data={pokemons}
        renderItem={({ item, index }) => (
          <PokemonListItem name={item.name} id={item.id} index={index} />
        )}
        keyExtractor={(item, index) => `${String(item.id)} ${String(index)}`}
        onEndReached={fetchNextPage}
        onRefresh={onRefresh}
        refreshing={refreshing}
        contentContainerStyle={[styles.list, refreshing && { opacity: 0.3 }]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 32,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    justifyContent: "center",
  },
});

export default PokemonList;
