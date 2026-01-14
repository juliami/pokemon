import EmptyFavoritePokemonPlaceholder from "@/components/empty-fav-pokemon-placeholder";
import PokemonCamera from "@/components/pokemon-camera";
import { useFavoritePokemonContext } from "@/hooks/use-favorite-pokemon-context";
import { useGetPokemonByIdQuery } from "@/hooks/use-get-pokemon-by-id";
import { Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useCameraPermission
} from 'react-native-vision-camera';

const CameraScreen = () => {

  const cameraPermissionStatus = useCameraPermission();
  const { requestPermission } = cameraPermissionStatus;

  const { favoritePokemonId } = useFavoritePokemonContext();
  const { data } = useGetPokemonByIdQuery(Number(favoritePokemonId));
  const hasPermission = false;
  const handlePress = () => {
    requestPermission().then((result) => console.log({ result }));
  }

  if (!favoritePokemonId || !data) {
    return (
      <EmptyFavoritePokemonPlaceholder
        text={'Ready for the Pokémon Camera?\nChoose your favorite Pokémon and start.'}
        image='camera'
      />
    )
  }

  const { imageUri } = data;

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>

      {hasPermission && <PokemonCamera pokemonImageUri={imageUri} />}
      {!hasPermission && <Button onPress={handlePress} title="Request" />}

    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },

});

export default CameraScreen;
