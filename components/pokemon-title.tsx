import { PokemonColorKey, PokemonColors } from "@/constants/theme";
import { capitalizeFirstLetter } from "@/utils/text";
import { TextStyle } from "react-native";
import { StyledText } from "./styled-text";

type Props = {
  color: PokemonColorKey;
  name: string;
  textStyles?: TextStyle;
};

const PokemonTitle = ({ color, name, textStyles }: Props) => (
  <StyledText
    style={[
      ,
      {
        textShadowColor: PokemonColors[color].darker,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
      },
      textStyles,
    ]}
  >
    {capitalizeFirstLetter(name)}
  </StyledText>
);

export default PokemonTitle;
