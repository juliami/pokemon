import { StyleSheet, View } from "react-native";

import PokemonData from "@/components/pokemon-data";
import PokemonImage from "@/components/pokemon-image";
import PokemonTypePills from "@/components/pokemon-type-pills";
import { Gaps } from "@/constants/layout";
import { PokemonColors } from "@/constants/theme";
import { useGetPokemonByIdQuery } from "@/hooks/use-get-pokemon-by-id";
import { useNavigation } from "expo-router";
import ToggleFavButton from "./fav-button";
import Loading from "./loading";
import PokemonTitle from "./pokemon-title";
import CloseButton from "./ui/close-button";

export default function Pokemon({
  id,
  showCloseButton,
}: {
  id: string;
  showCloseButton: boolean;
}) {
  const { data: pokemon, loading } = useGetPokemonByIdQuery(Number(id));
  const navigation = useNavigation();

  const closeView = () => navigation.goBack();

  if (loading) {
    return <Loading text="Waiting for the wild Pokemon to appear"/>;
  }
  if (!pokemon) {
    closeView();
    return;
  }

  const backgroundColor = PokemonColors[pokemon.color].default;
  const {
    name,
    weight,
    height,
    imageUri,
    genus,
    color,
    types,
    flavorText,
    abilities,
  } = pokemon;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={[styles.row, styles.header]}>
        <View style={styles.titleContainer}>
          <PokemonTitle textStyles={styles.title} name={name} color={color} />

          {showCloseButton && <CloseButton onPress={closeView} />}
        </View>
        <View style={styles.pillsContainer}>
          <PokemonTypePills
            types={types}
            backgroundColor={PokemonColors[color].darker}
          />
        </View>
        <PokemonImage imageUri={imageUri} contentPosition="bottom" />
        <View style={styles.bottomIconContainer}>
          <ToggleFavButton id={id.toString()} />
        </View>
      </View>

      <View style={styles.row}>
        <PokemonData
          genus={genus}
          flavorText={flavorText}
          height={height}
          weight={weight}
          color={color}
          abilities={abilities}
        />
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
  title: {
    color: "#fff",
    fontSize: 42,
    lineHeight: 54,
    fontWeight: "bold",
    flexGrow: 1,
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
