import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import PokemonParallax from "@/components/pokemon-parallax";

const PokemonDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <PokemonParallax id={id.toString()} showCloseButton={true} />
    </SafeAreaView>
  );
};

export default PokemonDetailsScreen;
