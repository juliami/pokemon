import EmptyFavoritePokemonPlaceholder from "@/components/empty-fav-pokemon-placeholder";
import Pokemon from "@/components/pokemon";

import { useFavoritePokemonContext } from "@/hooks/use-favorite-pokemon-context";


const FavoriteScreen = () => {
  const { favoritePokemonId } = useFavoritePokemonContext();

  if (!favoritePokemonId) {
    return (
      <EmptyFavoritePokemonPlaceholder
        text={'Your favorite Pokémon will live here.\nGo to Pokémon list and pick one!'}
      />
    );
  }

  return (
    <Pokemon id={favoritePokemonId} showCloseButton={false} />
  );
};

export default FavoriteScreen;
