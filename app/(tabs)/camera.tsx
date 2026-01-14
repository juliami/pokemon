import PokemonCamera from "@/components/pokemon-camera";
import PokemonCameraPlaceholder from "@/components/pokemon-camera-placeholder";
import { useFavoritePokemonContext } from "@/hooks/use-favorite-pokemon-context";
import { useGetPokemonByIdQuery } from "@/hooks/use-get-pokemon-by-id";
import { Button, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useCameraPermission
} from 'react-native-vision-camera';

const CameraScreen = () => {

  const cameraPermissionStatus = useCameraPermission();
  const { hasPermission, requestPermission } = cameraPermissionStatus;

  const  { favoritePokemonId }  = useFavoritePokemonContext();
  const { data } = useGetPokemonByIdQuery(Number(favoritePokemonId));

  const handlePress = () => {
    requestPermission().then((result) => console.log({ result }));
  }

  if (!favoritePokemonId || !data) {
    return (
      <PokemonCameraPlaceholder />
    )
  }

  const { imageUri } = data;

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <View style={styles.container}>

        {hasPermission && <PokemonCamera pokemonImageUri={imageUri} />}
        {!hasPermission && <Button onPress={handlePress} title="Request" />}

      </View>
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
