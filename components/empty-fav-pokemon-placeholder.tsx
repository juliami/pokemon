import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/app-example/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function EmptyFavoritePokemonPlaceholder() {
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require("@/assets/images/sad-pokemon.webp")}
        style={styles.image}
      />
      <ThemedText style={{ textAlign: "center" }}>
        You have not picked a favorite Pokémon yet.{"\n"}Browse the list and
        select your favorite!
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  row: {
    flexBasis: "50%",
    width: "100%",
  },
  image: {
    width: 200,
    height: 200,
    objectFit: "contain",
  },
});
