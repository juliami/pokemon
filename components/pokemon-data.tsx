import { StyleSheet, View } from "react-native";

import { Gaps } from "@/constants/layout";
import { PokemonColors } from "@/constants/theme";
import { DetailedPokemonSpecies } from "@/types";
import { hexToRGBA } from "@/utils/color";

import { ThemedText } from "./themed-text";
import Surface from "./ui/surface";

type Props = Pick<
  DetailedPokemonSpecies,
  "genus" | "flavorText" | "abilities" | "height" | "weight" | "color"
>;

const PokemonData = ({
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
        <ThemedText style={styles.label}>Genus</ThemedText>
        <ThemedText>{genus}</ThemedText>
      </View>
      <View style={styles.dataRow}>
        <ThemedText style={styles.label}>Size</ThemedText>
        <ThemedText>
          Height: {height} • Weight: {weight}
        </ThemedText>
      </View>

      <View style={[styles.dataRow, { backgroundColor: lightBackgroundColor }]}>
        <ThemedText style={styles.label}>Abilities</ThemedText>
        <ThemedText>{abilities}</ThemedText>
      </View>
      {flavorTextCleaned && (
        <ThemedText style={styles.flavorText}>{flavorTextCleaned}</ThemedText>
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

export default PokemonData;
