import { useSystemTheme } from "@/modules/system-theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";

interface FavoritePokemonContextProps {
  favoritePokemonId: string | null;
  setFavoritePokemonId: (id: string | null) => void;
}

const defaultContextValue: FavoritePokemonContextProps = {
  favoritePokemonId: null,
  setFavoritePokemonId: () => {},
};

export const FavoritePokemonContext = createContext<
  FavoritePokemonContextProps | undefined
>(defaultContextValue);

const FAV_POKEMON_KEY = "favorite-pokemon-id";

export const FavoritePokemonProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [favoritePokemonId, setFavoritePokemonId] = useState<string | null>(
    null,
  );

  useEffect(() => {
    AsyncStorage.getItem(FAV_POKEMON_KEY).then((value) => {
      if (value) {
        setFavoritePokemonId(value);
      }
    });
  }, []);

const systemTheme = useSystemTheme();
console.log("systemTheme", systemTheme);

  useEffect(() => {
    if (favoritePokemonId) {
      AsyncStorage.setItem(FAV_POKEMON_KEY, favoritePokemonId);
    }
  }, [favoritePokemonId]);

  return (
    <FavoritePokemonContext.Provider
      value={{ favoritePokemonId, setFavoritePokemonId }}
    >
      {children}
    </FavoritePokemonContext.Provider>
  );
};
