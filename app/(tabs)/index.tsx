import EmptyFavoritePokemonPlaceholder from "@/components/empty-fav-pokemon-placeholder";
import Pokemon from "@/components/pokemon";

import { SimpleView } from "@/components/simple-view";
import { useFavoritePokemonContext } from "@/hooks/use-favorite-pokemon-context";


const FavoriteScreen = () => {
  const {favoritePokemonId} = useFavoritePokemonContext();

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
