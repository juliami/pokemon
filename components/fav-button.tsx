import { useFavoritePokemonContext } from "@/hooks/use-favorite-pokemon-context";
import { Pressable, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { IconSymbol } from "./ui/icon-symbol";

const ToggleFavButton = ({ id }: { id: string }) => {
  const { favoritePokemonId, setFavoritePokemonId } =
    useFavoritePokemonContext();

  // Animated values
  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);

  const toggleFavoritePokemon = async () => {
    try {
      // Trigger animation
      scale.value = withSequence(
        withTiming(1.1, { duration: 100 }),
        withTiming(0.9, { duration: 200 }),
        withTiming(1, { duration: 100 }),
      );

      if (favoritePokemonId === id) {
        setFavoritePokemonId(null);
      } else {
        setFavoritePokemonId(id);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const isFavorite = favoritePokemonId === id;

  // Animated style
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }, { rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <View style={styles.button}>
      <Pressable onPress={toggleFavoritePokemon}>
        <Animated.View style={animatedStyle}>
          <IconSymbol
            size={40}
            name={isFavorite ? "heart.fill" : "heart"}
            color={"#fff"}
          />
        </Animated.View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    zIndex: 6,
    position: "relative",
  },
});

export default ToggleFavButton;
