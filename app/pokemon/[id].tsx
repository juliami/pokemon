import { Link, useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';

import { PokemonDetails } from '@/components/pokemon-details';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useGetPokemonByIdQuery } from '@/hooks/use-get-pokemon-by-id';

export default function ModalScreen() {
  const { id } = useLocalSearchParams();
  const { data: pokemon, loading } = useGetPokemonByIdQuery(Number(id));

  if (!pokemon) {
    return null
  }

  return (
    <ThemedView style={[styles.container, { backgroundColor: pokemon?.color }]}>
      {loading ? (
        <ThemedText>Loading...</ThemedText>
      ) : <>
        <PokemonDetails pokemon={pokemon} />
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
