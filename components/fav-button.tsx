import { FavoritePokemonContext } from "@/context/favorite-pokemon";
import React, { useContext } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { IconSymbol } from "./ui/icon-symbol";

const ToggleFavButton = ({ id }: { id: string }) => {
  const favoritePokemonContext = useContext(FavoritePokemonContext);

  if (!favoritePokemonContext) {
    throw new Error(
      "useContext(FavoritePokemonContext) must be inside a FavoritePokemonProvider",
    );
  }
  const { favoritePokemonId, setFavoritePokemonId } = favoritePokemonContext;

  const toggleFavoritePokemon = async () => {
    try {
      if (favoritePokemonId === id) {
        setFavoritePokemonId(null);
      } else {
        setFavoritePokemonId(id);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const isFavorite = favoritePokemonId === id;

  return (
    <View style={styles.button}>
      <Pressable onPress={toggleFavoritePokemon}>
        <IconSymbol
          size={40}
          name={isFavorite ? "heart.fill" : "heart"}
          color={"#fff"}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    zIndex: 6,
    position: "relative",
  },
});

export default ToggleFavButton;
