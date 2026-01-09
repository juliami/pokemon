import { Link, useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';

import { getPokemonById } from '@/api/fetch';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useEffect } from 'react';

export default function ModalScreen() {
     const { id } = useLocalSearchParams();
       useEffect(() => {
         // todo: move logic to the separate hook, handle loading and error states
         const fetchData = async () => {
           const data = await getPokemonById(Number(id));
         };
         fetchData();
       }, []);
     
    

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Pokemon id: {id}</ThemedText>
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
