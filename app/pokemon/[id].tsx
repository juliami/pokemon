import { useLocalSearchParams, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import Loading from "@/components/loading";
import Pokemon from "@/components/pokemon";
import { useGetPokemonByIdQuery } from "@/hooks/use-get-pokemon-by-id";
import { capitalizeFirstLetter } from "@/utils/text";
import { useEffect } from "react";

export default function PokemonDetailsScreen() {
  const { id } = useLocalSearchParams();
  const { data: pokemon, loading } = useGetPokemonByIdQuery(Number(id));
  const navigation = useNavigation();


  useEffect(() => {
    navigation.setOptions({
      title: pokemon?.name ? capitalizeFirstLetter(pokemon.name) : "Loading...",
    });
  }, [navigation, pokemon]);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      {loading || !pokemon ? <Loading /> : <Pokemon id={id.toString()} />}
    </SafeAreaView>
  );
}