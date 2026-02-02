import Placeholder from "@/components/placeholder";
import PokemonParallax from "@/components/pokemon-parallax";

import { useFavoritePokemonContext } from "@/hooks/use-favorite-pokemon-context";

const FavoriteScreen = () => {
  const { favoritePokemonId } = useFavoritePokemonContext();

  if (!favoritePokemonId) {
    return (
      <Placeholder
        text={
          "Your favorite Pokémon will live here.\nGo to Pokémon list and pick one!"
        }
      />
    );
  }

  return <PokemonParallax id={favoritePokemonId} showCloseButton={false} />;
};

export default FavoriteScreen;
