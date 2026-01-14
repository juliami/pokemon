import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

import { StyledText } from "@/components/styled-text";

export default function EmptyFavoritePokemonPlaceholder() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/pokemon-camera.webp")}
        style={styles.image}
      />
      <StyledText style={{ textAlign: "center", width: '100%', height: 80 }}>
        Ready for the Pokémon Camera?{"\n"}Choose your favorite Pokémon and start.
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
