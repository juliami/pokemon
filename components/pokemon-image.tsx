import { Image } from "expo-image";
import { ImageStyle, StyleSheet } from "react-native";

type Props = {
  contentPosition: "center" | "bottom";
  imageUri: string;
  imageStyles?: ImageStyle;
  shadowStyles?: ImageStyle;
};

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const PokemonImage = ({
  imageUri,
  contentPosition,
  imageStyles,
  shadowStyles,
}: Props) => (
  <>
    <Image
      source={{ uri: imageUri }}
      placeholder={require("@/assets/images/placeholder-pokeball.png")}
      style={[styles.imageShadow, shadowStyles]}
      contentPosition={contentPosition}
      tintColor={"white"}
      contentFit={"contain"}
    />
    <Image
      source={{ uri: imageUri }}
      style={[styles.image, imageStyles]}
      placeholder={require("@/assets/images/placeholder-pokeball.png")}
      contentPosition={contentPosition}
      contentFit={"contain"}
    />
  </>
);

const styles = StyleSheet.create({
  imageShadow: {
    ...StyleSheet.absoluteFillObject,
    flexGrow: 1,
    position: "absolute",
    opacity: 0.15,
    transform: [{ translateY: 80 }, { scale: 1.7 }],
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    paddingInline: 10,
    flexGrow: 1,
    zIndex: 5,
    transform: [{ translateY: 60 }],
  },
});

export default PokemonImage;
