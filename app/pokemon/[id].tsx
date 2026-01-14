import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import Pokemon from "@/components/pokemon";

const PokemonDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <Pokemon id={id.toString()} showCloseButton={true} />
    </SafeAreaView>
  );
};

export default PokemonDetailsScreen;
