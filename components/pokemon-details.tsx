import { StyleSheet, View } from "react-native";

import { Gaps } from "@/constants/layout";
import { PokemonColors } from "@/constants/theme";
import { DetailedPokemonSpecies } from "@/types";
import { hexToRGBA } from "@/utils/color";

import { StyledText } from "./styled-text";
import Surface from "./ui/surface";

type Props = Pick<
  DetailedPokemonSpecies,
  "genus" | "flavorText" | "abilities" | "height" | "weight" | "color"
>;

export const PokemonDetails = ({
  genus,
  flavorText,
  abilities,
  height,
  weight,
  color,
}: Props) => {
  const flavorTextCleaned = flavorText.replace(/\n|\f/g, " ");
  const lightBackgroundColor = hexToRGBA(PokemonColors[color].default, 0.1);

  return (
    <Surface>
      <View style={[styles.dataRow, { backgroundColor: lightBackgroundColor }]}>
        <StyledText style={styles.label}>Genus</StyledText>
        <StyledText>{genus}</StyledText>
      </View>
      <View style={styles.dataRow}>
        <StyledText style={styles.label}>Size</StyledText>
        <StyledText>
          Height: {height} • Weight: {weight}
        </StyledText>
      </View>

      <View style={[styles.dataRow, { backgroundColor: lightBackgroundColor }]}>
        <StyledText style={styles.label}>Abilities</StyledText>
        <StyledText>{abilities}</StyledText>
      </View>
      {flavorTextCleaned && (
        <StyledText style={styles.flavorText}>{flavorTextCleaned}</StyledText>
      )}
    </Surface>
  );
};

const styles = StyleSheet.create({
  flavorText: {
    fontStyle: "italic",
    paddingBlock: Gaps.small,
    paddingInline: Gaps.large,
  },

  label: {
    fontWeight: "bold",
  },
  dataRow: {
    display: "flex",
    paddingBlock: Gaps.small,
    paddingInline: Gaps.large,
  },
});
