import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const PokemonImage = ({ imageUri }: { imageUri: string }) => (
  <>
    <Image
      source={{ uri: imageUri }}
      style={styles.imageShadow}
      contentPosition={"bottom"}
      tintColor={"white"}
    />
    <Image
      source={{ uri: imageUri }}
      style={styles.image}
      contentPosition={"bottom"}
    />
  </>
);

const styles = StyleSheet.create({
  imageShadow: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
    flexGrow: 1,
    position: "absolute",
    opacity: 0.15,
    transform: [{ translateY: 80 }, { scale: 1.7 }],
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    paddingInline: 10,
    resizeMode: "contain",
    flexGrow: 1,
    zIndex: 5,
    transform: [{ translateY: 60 }],
  },
});

export default PokemonImage;
