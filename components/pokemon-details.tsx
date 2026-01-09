import { Pokemon } from '@/types';
import FastImage from 'react-native-fast-image';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';


export const PokemonDetails = ({pokemon}: {pokemon: Pokemon}) => (
  <ThemedView>
    <ThemedText type="title">{pokemon.name}</ThemedText>


  <FastImage
        style={{ width: 200, height: 200 }}
        source={{
            uri: pokemon.sprites.other['official-artwork'].front_default ,
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
    />

    {/* <ThemedImage
      source={{ uri: pokemon.sprites.other['official-artwork'].front_default }}
      style={{ width: 200, height: 200 }}
    /> */}
  </ThemedView>
)

