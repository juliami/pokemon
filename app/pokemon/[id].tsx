import { useLocalSearchParams, useNavigation } from "expo-router";
import { StyleSheet, View } from "react-native";

import Loading from "@/components/loading";
import { PokemonDetails } from "@/components/pokemon-details";
import PokemonImage from "@/components/pokemon-image";
import PokemonTypePills from "@/components/pokemon-type-pills";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import CloseButton from "@/components/ui/close-button";
import { Gaps } from "@/constants/layout";
import { PokemonColors } from "@/constants/theme";
import { useGetPokemonByIdQuery } from "@/hooks/use-get-pokemon-by-id";
import { capitalizeFirstLetter } from "@/utils/text";
import React, { useEffect } from "react";

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

  const closeModal = () => navigation.goBack();

  const backgroundColor = PokemonColors[pokemon.color].default;
  const {
    name,
    weight,
    height,
    imageUri,
    genus,
    color,
    types,
    flavorText,
    abilities,
  } = pokemon;

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <View style={[styles.row, styles.header]}>
        <View style={styles.titleContainer}>
          <ThemedText
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
          </ThemedText>
          <CloseButton onPress={closeModal} />
        </View>
        <PokemonTypePills
          types={types}
          backgroundColor={PokemonColors[color].darker}
        />
        <PokemonImage imageUri={imageUri} />
      </View>

      <View style={styles.row}>
        <PokemonDetails
          genus={genus}
          flavorText={flavorText}
          height={height}
          weight={weight}
          color={color}
          abilities={abilities}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  title: {
    color: "#fff",
    fontSize: 42,
    lineHeight: 54,
    fontWeight: "bold",
    flexGrow: 1,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Gaps.medium,
    zIndex: 2,
  },
  header: {
    padding: Gaps.large,
    zIndex: 5,
  },
  row: {
    flexBasis: "50%",
    width: "100%",
  },
});
