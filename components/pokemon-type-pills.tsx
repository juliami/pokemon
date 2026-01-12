import { Gaps } from "@/constants/layout";
import { View } from "react-native";
import Pill from "./ui/pill";

const PokemonTypePills = ({
  types,
  backgroundColor,
}: {
  types: string[];
  backgroundColor: string;
}) => {
  return (
    <View style={{ flexDirection: "row", gap: Gaps.small, zIndex: 2 }}>
      {types.map((type) => (
        <Pill key={type} backgroundColor={backgroundColor}>
          {type}
        </Pill>
      ))}
    </View>
  );
};

export default PokemonTypePills;
