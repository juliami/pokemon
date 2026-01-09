import { Link, useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';

import { PokemonDetails } from '@/components/pokemon-details';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useGetPokemonByIdQuery } from '@/hooks/use-get-pokemon-by-id';

export default function ModalScreen() {
    const { id } = useLocalSearchParams();
    const { data, loading } = useGetPokemonByIdQuery(Number(id));


  const pokemon = data?.pokemon_v2_pokemonspecies[0];
  console.log(pokemon?.pokemon_v2_pokemons[0].pokemon_v2_pokemonsprites[0].sprites.other['official-artwork'].front_default);


  return (
    <ThemedView style={styles.container}>
      {loading ? (
        <ThemedText>Loading...</ThemedText>
      ) : <>
        <PokemonDetails pokemon={pokemon} />
        <ThemedText type="title">{pokemon?.name}</ThemedText>
      </>}


   

      <Link href="/list" dismissTo style={styles.link}>
        <ThemedText type="link">Close</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
