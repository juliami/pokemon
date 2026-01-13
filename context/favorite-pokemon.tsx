import { useFavoritePokemonFromAsyncStorage } from '@/hooks/use-favorite-pokemon-from-async-storage';
import React, { createContext, useState } from 'react';

interface FavoritePokemonContextProps {
    favoritePokemonId: string | null;
    setFavoritePokemonId: (id: string | null) => void;
}

const defaultContextValue: FavoritePokemonContextProps = {
    favoritePokemonId: null,
    setFavoritePokemonId: () => {} 
};

export const FavoritePokemonContext = createContext<FavoritePokemonContextProps | undefined>(defaultContextValue);

export const FavoritePokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const savedFavoritePokemoonId = useFavoritePokemonFromAsyncStorage();
    const [favoritePokemonId, setFavoritePokemonId] = useState<string | null>(savedFavoritePokemoonId);

    return (
        <FavoritePokemonContext.Provider value={{ favoritePokemonId, setFavoritePokemonId }}>
            {children}
        </FavoritePokemonContext.Provider>
    );
};