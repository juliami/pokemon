import { getPokemons } from "@/api/fetch";
import { Pokemon } from "@/types";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import PokemonListItem from "./pokemon-list-item";
import { ThemedText } from "./themed-text";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[] | undefined>(undefined);

  useEffect(() => {
    // todo: move logic to the separate hook, handle loading and error states
    const fetchData = async () => {
      const data = await getPokemons();
      setPokemons(data);
    };
    fetchData();
  }, []);

  if (!pokemons) {
    return <ThemedText type="defaultSemiBold">Loading...</ThemedText>;
  }

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
        keyExtractor={(item) => item.name}
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
