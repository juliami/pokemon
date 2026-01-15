import { BasicPokemonSpecies } from "@/types";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

import { Gaps, Radius } from "@/constants/layout";
import { PokemonColors } from "@/constants/theme";
import PokemonImage from "./pokemon-image";
import PokemonTitle from "./pokemon-title";
import { StyledText } from "./styled-text";

const PokemonListItem = ({
  name,
  id,
  color,
  imageUri,
}: BasicPokemonSpecies) => {
  const backgroundColor = PokemonColors[color].default;
  return (
    <Link href={`/pokemon/${id}`} style={styles.listItem} testID="pokemon-link">
      <View style={[{ backgroundColor }, styles.card]}>
        <View style={styles.imageContainer}>
          <PokemonImage
            imageUri={imageUri}
            contentPosition="center"
            imageStyles={styles.image}
            shadowStyles={styles.imageShadow}
          />
        </View>
        <View style={styles.dataContainer}>
          <PokemonTitle textStyles={styles.title} name={name} color={color} />
        </View>
        <View>
          <StyledText style={styles.id}>#{id}</StyledText>
        </View>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: Gaps.xSmall,
    boxSizing: "border-box",
  },
  card: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    borderRadius: Radius.small,
    gap: Gaps.medium,
    overflow: "hidden",
    boxShadow: "2px 4px 3px -2px rgb(0 0 0 / 21%)",
  },
  id: {
    color: "#fff",
    opacity: 0.3,
    fontSize: 15,
    fontWeight: "bold",
    padding: Gaps.small,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
  },
  imageContainer: {
    flexBasis: "30%",
  },
  dataContainer: {
    paddingBlock: Gaps.xLarge,
    boxSizing: "border-box",
    flexGrow: 1,
  },
  image: {
    width: "110%",
    height: "110%",
    transform: [{ translateY: "-5%" }, { translateX: "2%" }],
  },
  imageShadow: {
    opacity: 0.09,
    transform: [{ translateY: -40 }, { translateX: 80 }, { scale: 3.2 }],
  },
});

export default PokemonListItem;
