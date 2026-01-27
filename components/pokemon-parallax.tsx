import { StyleSheet, View } from "react-native";

import PokemonData from "@/components/pokemon-data";
import PokemonParallaxImage from "@/components/pokemon-parallax-image";
import PokemonTypePills from "@/components/pokemon-type-pills";
import { Gaps } from "@/constants/layout";
import { PokemonColors } from "@/constants/theme";
import { useGetPokemonByIdQuery } from "@/hooks/use-get-pokemon-by-id";
import { useParallaxStyle } from "@/hooks/use-parallax";
import { useNavigation } from "expo-router";
import Animated from "react-native-reanimated";
import ToggleFavButton from "./fav-button";
import Loading from "./loading";
import PokemonTitle from "./pokemon-title";
import CloseButton from "./ui/close-button";

export default function PokemonParallax({
  id,
  showCloseButton,
  showPokemonData = true,
}: {
  id: string;
  showCloseButton: boolean;
  showPokemonData?: boolean;
}) {
  const { data: pokemon, loading } = useGetPokemonByIdQuery(Number(id));
  const navigation = useNavigation();

  const foregroundStyle = useParallaxStyle();
  const closeView = () => navigation.goBack();

  if (loading) {
    return <Loading text="Loading pokemon..." />;
  }
  if (!pokemon) {
    closeView();
    return;
  }

  const backgroundColor = PokemonColors[pokemon.color].default;
  const { name, imageUri, color, types } = pokemon;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={[styles.row, styles.header]}>
        <Animated.View style={[styles.titleContainer, foregroundStyle]}>
          <PokemonTitle name={name} color={color} />
          {showCloseButton && <CloseButton onPress={closeView} />}
        </Animated.View>
        <Animated.View style={[styles.pillsContainer, foregroundStyle]}>
          <PokemonTypePills types={types} color={color} />
        </Animated.View>
        <PokemonParallaxImage imageUri={imageUri} />
        <Animated.View style={[styles.bottomIconContainer, foregroundStyle]}>
          <ToggleFavButton id={id.toString()} />
        </Animated.View>
      </View>
      <View style={styles.row}>
        {showPokemonData && <PokemonData pokemon={pokemon} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
  },

  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Gaps.medium,
    zIndex: 2,
  },
  header: {
    padding: Gaps.medium,
    zIndex: 5,
  },
  row: {
    flexBasis: "50%",
    width: "100%",
  },
  bottomIconContainer: {
    alignItems: "flex-end",
    zIndex: 5,
  },
  pillsContainer: {
    flexGrow: 1,
  },
});
