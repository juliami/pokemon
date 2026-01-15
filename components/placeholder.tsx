import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

import { StyledText } from "@/components/styled-text";

interface Props {
  text: string;
  image?: string;
  children?: React.ReactNode;
}
export default function EmptyFavoritePokemonPlaceholder({
  text,
  image,
  children,
}: Props) {
  const showCameraImage = image === "camera";
  return (
    <View style={styles.container}>
      <Image
        source={
          showCameraImage
            ? require("@/assets/images/pokemon-camera.webp")
            : require("@/assets/images/sad-pokemon.webp")
        }
        style={styles.image}
      />
      <StyledText style={{ textAlign: "center", width: "100%", height: 80 }}>
        {text}
      </StyledText>
      {children}
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
