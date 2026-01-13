import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export const useFavoritePokemonFromAsyncStorage = (): string | null => {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    async function loadStorageValue() {
      try {
        const storedValue = await AsyncStorage.getItem("favorite-pokemon-id");
        setValue(storedValue);
      } catch (e) {
        console.log(e);
      }
    }

    loadStorageValue();
  }, []);

  return value;
};
