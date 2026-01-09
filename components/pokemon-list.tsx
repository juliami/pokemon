import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import { FlatList, StyleSheet, Text } from "react-native";
import PokemonListItem from "./pokemon-list-item";
import { ThemedText } from "./themed-text";


const gqlQuery = gql`
  query {
    pokemon_v2_pokemonspecies(order_by: { name: asc }) {
      name
      id
    }
  }
`;

const PokemonList = () => {

const { loading, error, data: pokemons } = useQuery(gqlQuery);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  console.log(pokemons);

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
