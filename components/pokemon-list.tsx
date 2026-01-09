import { useGetPokemonsQuery } from "@/hooks/use-get-pokemons-query";
import { FlatList, StyleSheet, Text } from "react-native";


import PokemonListItem from "./pokemon-list-item";
import { ThemedText } from "./themed-text";

const PokemonList = () => {
  const { loading, error, data } = useGetPokemonsQuery();

  if (loading) return <ThemedText>Loading...</ThemedText>;
  if (error) return <ThemedText>Error: {error.message}</ThemedText>;

  const pokemons = data?.pokemon_v2_pokemonspecies;

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
        keyExtractor={(item) => item.id.toString()}
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
