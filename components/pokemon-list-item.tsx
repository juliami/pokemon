import { Pokemon } from "@/types";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "./themed-text";

const PokemonListItem = ({ name, id, index }: Pokemon & { index: number }) => {
  return (
    <View style={styles.listItem}>
      <ThemedText type="default">{index}</ThemedText>
      <ThemedText>{name}</ThemedText>
      <ThemedText style={styles.id}>#{id}</ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    display: "flex",
    padding: 8,
    flexDirection: "row",
    gap: 4,
  },
  id: {
    marginLeft: "auto",
  },
});

export default PokemonListItem;
