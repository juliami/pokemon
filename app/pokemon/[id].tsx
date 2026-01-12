import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

import Pokemon from "@/components/pokemon";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useGetPokemonByIdQuery } from "@/hooks/use-get-pokemon-by-id";

export default function ModalScreen() {
  const { id } = useLocalSearchParams();
  const { data: pokemon, loading } = useGetPokemonByIdQuery(Number(id));

  if (!pokemon) {
    return null;
  }

  if (loading) {
    return (
      <ThemedView style={[styles.container]}>
        <ThemedText>Loading...</ThemedText>
      </ThemedView>
    );
  }
  return (
   <Pokemon id={id.toString()} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },

});
