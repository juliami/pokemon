import { FavoritePokemonContext } from "@/context/favorite-pokemon";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { IconSymbol } from './ui/icon-symbol';

const ToggleFavButton = ({ id }: { id: string }) => {

    const favoritePokemonContext = useContext(FavoritePokemonContext);
    
    if (!favoritePokemonContext) {
        throw new Error('useContext(FavoritePokemonContext) must be inside a FavoritePokemonProvider');
    }
    const { favoritePokemonId, setFavoritePokemonId } = favoritePokemonContext;


    const toggleFavoritePokemon = async () => {
        try {
            if (favoritePokemonId === id) {
                await AsyncStorage.setItem('favorite-pokemon-id', '');
                setFavoritePokemonId(null);
            } else {
                await AsyncStorage.setItem('favorite-pokemon-id', id);
                setFavoritePokemonId(id);
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (<View style={styles.button}>
        <Pressable onPress={toggleFavoritePokemon}>
            <IconSymbol
                size={50}
                name={favoritePokemonId === id ? "heart.fill" : "heart"}
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