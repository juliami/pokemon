import { FavoritePokemonContext } from "@/context/favorite-pokemon";
import { useContext } from "react";

export const useFavoritePokemonContext = () => {
  const context = useContext(FavoritePokemonContext);

  if (!context) {
    throw new Error(
      "useFavoritePokemon must be used within a FavoritePokemonProvider",
    );
  }

  return context;
};
