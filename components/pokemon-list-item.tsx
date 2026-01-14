import { BasicPokemonSpecies } from "@/types";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

import { StyledText } from "./styled-text";

const PokemonListItem = ({
  name,
  id,
  index,
}: BasicPokemonSpecies & { index: number }) => {
  return (
    <Link href={`/pokemon/${id}`}>
      <View style={styles.listItem}>
        <StyledText type="default">{index}</StyledText>
        <StyledText>{name}</StyledText>
        <StyledText style={styles.id}>#{id}</StyledText>
      </View>
    </Link>
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
