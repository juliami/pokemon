import Pokemon from "@/components/pokemon";
import { SimpleView } from "@/components/simple-view";
import { ThemedText } from "@/components/themed-text";
import { useFavoritePokemon } from "@/hooks/use-favorite-pokemon";

const FavoriteScreen = () => {

  
  const favoritePokemonId = useFavoritePokemon()
  console.log({favoritePokemonId})

  if (!favoritePokemonId) {
    return (
        <SimpleView>
          <ThemedText type="defaultSemiBold">You haven't chosen a favorite Pokémon yet.</ThemedText>
        </SimpleView>
    )
    
  }


  return (
  <SimpleView>
      <Pokemon id={favoritePokemonId} />
  </SimpleView>
)};

export default FavoriteScreen;
