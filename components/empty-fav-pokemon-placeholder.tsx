import { Image } from "expo-image";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

import { StyledText } from "@/components/styled-text";

export default function EmptyFavoritePokemonPlaceholder() {
  const { height, width } = useWindowDimensions();
  const rnOrientation = height > width ? "portrait" : "landscape";

  return (
    <View style={styles.container}>
      <Text>React Native: {rnOrientation}</Text>
      <Image
        source={require("@/assets/images/sad-pokemon.webp")}
        style={styles.image}
      />
      <StyledText style={{ textAlign: "center" }}>
        You have not picked a favorite Pokémon yet.{"\n"}Browse the list and
        select your favorite!
      </StyledText>
    </View>
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
