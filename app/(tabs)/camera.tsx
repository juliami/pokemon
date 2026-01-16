import Placeholder from "@/components/placeholder";
import PokemonCamera from "@/components/pokemon-camera";
import { useFavoritePokemonContext } from "@/hooks/use-favorite-pokemon-context";
import { useGetPokemonByIdQuery } from "@/hooks/use-get-pokemon-by-id";
import { Button } from "react-native";
import { useCameraPermission } from "react-native-vision-camera";

const CameraScreen = () => {
  const cameraPermissionStatus = useCameraPermission();
  const { hasPermission, requestPermission } = cameraPermissionStatus;

  const { favoritePokemonId } = useFavoritePokemonContext();
  const { data } = useGetPokemonByIdQuery(Number(favoritePokemonId));

  if (!hasPermission) {
    return (
      <Placeholder text={"Camera access needed"} image="camera">
        <Button onPress={requestPermission} title="Request access" />
      </Placeholder>
    );
  }

  if (!favoritePokemonId || !data) {
    return (
      <Placeholder
        text={
          "Ready for the Pokémon Camera?\nChoose your favorite Pokémon and start."
        }
        image="camera"
      />
    );
  }

  if (favoritePokemonId && data) {
    const { imageUri } = data;
    return <PokemonCamera pokemonImageUri={imageUri} />;
  }

  return (
    <Placeholder
      text={
        "Ready for the Pokémon Camera?\nChoose your favorite Pokémon and start."
      }
      image="camera"
    />
  );
};

export default CameraScreen;
