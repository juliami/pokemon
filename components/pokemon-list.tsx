import { useGetPokemonsQuery } from "@/hooks/use-get-pokemons-query";
import { useCallback } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import PokemonListItem from "./pokemon-list-item";
import { ThemedText } from "./themed-text";

const PokemonList = () => {
  const { data, loading, error, fetchMore } = useGetPokemonsQuery();
  
  const pokemons = data?.pokemon_v2_pokemonspecies;

  if (!pokemons?.length && loading) return <ThemedText>Loading...</ThemedText>;
  if (error) return <ThemedText>Error: {error.message}</ThemedText>;

  if (!pokemons) return <ThemedText>No pokemons found</ThemedText>;
  
  const fetchNextPage = useCallback(() =>{
     fetchMore({
          variables: {
            offset: pokemons.length
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;
            return {
              ...prev,
              pokemon_v2_pokemonspecies: [
                ...prev.pokemon_v2_pokemonspecies,
                ...fetchMoreResult.pokemon_v2_pokemonspecies
              ]
            };
          }
        });
  }, [fetchMore, pokemons]);
  
  return (
    <>
      <ThemedText type="defaultSemiBold" style={styles.header}>
        <Text>No.</Text>
        <Text>Name</Text>
        <Text style={styles.id}>Id</Text>
      </ThemedText>

      <FlatList
        data={pokemons}
        renderItem={({ item, index }) => (
          <PokemonListItem name={item.name} id={item.id} index={index} />
        )}
        keyExtractor={(item, index) => `${String(item.id)} ${String(index)}`}
        onEndReached={fetchNextPage}
        style={styles.list}
      />

    </>
  );
};

const styles = StyleSheet.create({
  list: {
    display: "flex",
  },
  header: {
    display: "flex",
    padding: 8,
    flexDirection: "row",
    gap: 4,
  },
  id: {
    marginLeft: "auto",
  },
});

export default PokemonList;
