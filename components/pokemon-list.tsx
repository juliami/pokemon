import { PokemonColorKey } from "@/constants/theme";
import { useGetPokemonsQuery } from "@/hooks/use-get-pokemons-query";
import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import Loading from "./loading";
import PokemonListItem from "./pokemon-list-item";
import { StyledText } from "./styled-text";
import ListItemActivityIndicator from "./ui/list-item-activity-indicator";

const PokemonList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { data, error, fetchMore, refetch, loading } = useGetPokemonsQuery();

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
  if (!pokemons && loading) return <Loading text="Catching them all" />;

  return (
    <>
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
        onEndReachedThreshold={10}
        onRefresh={onRefresh}
        refreshing={refreshing}
        windowSize={5}
        initialNumToRender={8}
        maxToRenderPerBatch={8}
        contentContainerStyle={[refreshing && { opacity: 0.3 }]}
        testID="pokemon-list"
        ListFooterComponent={loading ? <ListItemActivityIndicator /> : null}
      />
    </>
  );
};

export default PokemonList;
