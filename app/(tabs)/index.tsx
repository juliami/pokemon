import Placeholder from "@/components/placeholder";
import Pokemon from "@/components/pokemon";

import { useFavoritePokemonContext } from "@/hooks/use-favorite-pokemon-context";


const FavoriteScreen = () => {
  const { favoritePokemonId } = useFavoritePokemonContext();

  if (!favoritePokemonId) {
    return (
      <Placeholder
        text={'Your favorite Pokémon will live here.\nGo to Pokémon list and pick one!'}
      />
    );
  }

  return (
    <Pokemon id={favoritePokemonId} showCloseButton={false} />
  );
};

export default FavoriteScreen;
