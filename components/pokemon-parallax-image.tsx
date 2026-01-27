import { useParallaxStyle } from "@/hooks/use-parallax";
import { memo } from "react";
import { ImageStyle, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
type Props = {
  imageUri: string;
  imageStyles?: ImageStyle;
  shadowStyles?: ImageStyle;
};

const PokemonParallaxImage = ({
  imageUri,
  imageStyles,
  shadowStyles,
}: Props) => {
  const foregroundStyle = useParallaxStyle({ offsetY: 80, intensity: 3 });
  const backgroundStyle = useParallaxStyle({ offsetY: 70, scale: 1.7 });

  return (
    <>
      <Animated.Image
        source={{ uri: imageUri }}
        style={[backgroundStyle, styles.imageShadow, shadowStyles]}
        tintColor={"white"}
      />
      <Animated.Image
        source={{ uri: imageUri }}
        style={[styles.image, imageStyles, foregroundStyle]}
      />
    </>
  );
};
const styles = StyleSheet.create({
  imageShadow: {
    ...StyleSheet.absoluteFillObject,
    flexGrow: 1,
    position: "absolute",
    opacity: 0.15,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    paddingInline: 10,
    flexGrow: 1,
    zIndex: 5,
  },
});

export default memo(PokemonParallaxImage);
