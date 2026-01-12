import { DetailedPokemonSpecies } from '@/types';
import { Image } from 'expo-image';
import { StyleSheet } from "react-native";
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';


export const PokemonDetails = ({ pokemon }: { pokemon: DetailedPokemonSpecies }) => {
    return (
        <ThemedView style={styles.simpleView}>
            <ThemedText type="title">{pokemon?.name}</ThemedText>
            <Image source={{ uri: pokemon.imageUri }} style={{ width: 200, height: 200 }} />
        </ThemedView>
    )
}

const styles = StyleSheet.create({
  simpleView: {
    backgroundColor: 'transparent',
  },
});