import { Gaps } from "@/constants/layout";
import { PokemonColorKey, PokemonColors } from "@/constants/theme";
import { View } from "react-native";
import Pill from "./ui/pill";

const PokemonTypePills = ({
  types,
  color,
}: {
  types: string[];
  color: PokemonColorKey;
}) => {
  return (
    <View style={{ flexDirection: "row", gap: Gaps.small, zIndex: 2 }}>
      {types.map((type) => (
        <Pill key={type} backgroundColor={PokemonColors[color].darker}>
          {type}
        </Pill>
      ))}
    </View>
  );
};

export default PokemonTypePills;
