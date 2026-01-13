import Pokemon from "@/components/pokemon";
import { SimpleView } from "@/components/simple-view";
import { ThemedText } from "@/components/themed-text";
import { FavoritePokemonContext } from "@/context/favorite-pokemon";
import React, { useContext } from 'react';

const FavoriteScreen = () => {

     const favoritePokemonContext = useContext(FavoritePokemonContext);
     if (!favoritePokemonContext) {
         throw new Error('useContext(FavoritePokemonContext) must be inside a FavoritePokemonProvider');
     }
     const { favoritePokemonId } = favoritePokemonContext;


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
