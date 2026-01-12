import { useFavoritePokemon } from '@/hooks/use-favorite-pokemon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { IconSymbol } from './ui/icon-symbol';

const ToggleFavButton = ({ id }: { id: string }) => {
    const favoritePokemonId = useFavoritePokemon();
    const [isFavorite, setIsFavorite] = useState(favoritePokemonId === id);

    // Listen for changes in favoritePokemonId, update local state
    useEffect(() => {
        setIsFavorite(favoritePokemonId === id);
    }, [favoritePokemonId, id]);

    const toggleFavoritePokemon = async () => {
        try {
            if (isFavorite) {
                await AsyncStorage.setItem('favorite-pokemon-id', '');
                setIsFavorite(false);
            } else {
                await AsyncStorage.setItem('favorite-pokemon-id', id);
                setIsFavorite(true);
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (<View style={styles.button}>
        <Pressable onPress={toggleFavoritePokemon}>
            <IconSymbol
                size={50}
                name={isFavorite ? "heart.fill" : "heart.circle"}
                color={"#fff"}
            />
        </Pressable>
    </View>);
};

const styles = StyleSheet.create({
    button: {
        zIndex: 6,
        position: 'relative'
    },
});

export default ToggleFavButton;