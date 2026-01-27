import { PokemonColorKey, PokemonColors } from "@/constants/theme";
import { capitalizeFirstLetter } from "@/utils/text";
import { StyleSheet } from "react-native";
import { StyledText } from "./styled-text";

const PokemonTitle = ({
  name,
  color,
}: {
  name: string;
  color: PokemonColorKey;
}) => (
  <StyledText
    style={[
      styles.title,
      {
        textShadowColor: PokemonColors[color].darker,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
      },
    ]}
  >
    {capitalizeFirstLetter(name)}
  </StyledText>
);

export default PokemonTitle;

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 42,
    lineHeight: 54,
    fontWeight: "bold",
    flexGrow: 1,
  },
});
