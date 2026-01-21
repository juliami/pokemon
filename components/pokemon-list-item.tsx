import { BasicPokemonSpecies } from "@/types";
import { Href, Link } from "expo-router";
import { StyleSheet, View } from "react-native";

import { Gaps, Radius } from "@/constants/layout";
import { PokemonColors } from "@/constants/theme";
import { capitalizeFirstLetter } from "@/utils/text";
import { memo, useMemo } from "react";
import PokemonImage from "./pokemon-image";
import { StyledText } from "./styled-text";

const PokemonListItem = ({
  name,
  id,
  color,
  imageUri,
}: BasicPokemonSpecies) => {
  const cardStyle = useMemo(
    () => [{ backgroundColor: PokemonColors[color].default }, styles.card],
    [color],
  );

  const href = useMemo<Href>(
    () => ({
      pathname: "/pokemon/[id]",
      params: { id },
    }),
    [id],
  );

  return (
    <Link href={href} style={styles.listItem} testID="pokemon-link">
      <View style={cardStyle}>
        <View style={styles.imageContainer}>
          <PokemonImage
            imageUri={imageUri}
            contentPosition="center"
            imageStyles={styles.image}
            shadowStyles={styles.imageShadow}
          />
        </View>
        <View style={styles.dataContainer}>
          <StyledText style={styles.title}>
            {capitalizeFirstLetter(name)}
          </StyledText>
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
    height: 200,
    overflow: "hidden",
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
    boxSizing: "border-box",
    height: 200,
    flexGrow: 1,
    justifyContent: "center",
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

export default memo(PokemonListItem);
