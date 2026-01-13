import { useLocalSearchParams, useNavigation } from "expo-router";
import { StyleSheet } from "react-native";

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

  if (!pokemon || loading) {
    return <Loading />;
  }

  return (
   <Pokemon id={id.toString()} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
