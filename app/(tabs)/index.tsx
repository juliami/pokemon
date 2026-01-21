import EmptyFavoritePokemonPlaceholder from "@/components/empty-fav-pokemon-placeholder";
import Pokemon from "@/components/pokemon";
import { SimpleView } from "@/components/simple-view";
import { FavoritePokemonContext } from "@/context/favorite-pokemon";
import React, { useContext } from "react";

const FavoriteScreen = () => {
  const favoritePokemonContext = useContext(FavoritePokemonContext);

  if (!favoritePokemonContext) {
    throw new Error(
      "useContext(FavoritePokemonContext) must be inside a FavoritePokemonProvider",
    );
  }
  const { favoritePokemonId } = favoritePokemonContext;

  if (!favoritePokemonId) {
    return (
      <SimpleView>
        <EmptyFavoritePokemonPlaceholder />
      </SimpleView>
    );
  }

  return (
    <SimpleView>
      <Pokemon id={favoritePokemonId} showCloseButton={false} />
    </SimpleView>
  );
};

export default FavoriteScreen;
