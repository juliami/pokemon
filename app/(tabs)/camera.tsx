import Placeholder from "@/components/placeholder";
import { useFavoritePokemonContext } from "@/hooks/use-favorite-pokemon-context";
import { useGetPokemonByIdQuery } from "@/hooks/use-get-pokemon-by-id";
import { Platform } from "react-native";

const CameraScreen = () => {
  const { favoritePokemonId } = useFavoritePokemonContext();
  const { data } = useGetPokemonByIdQuery(Number(favoritePokemonId));

  if (Platform.OS === "web") {
    return (
      <Placeholder
        text={"Use your phone to play with Pokémon camera!"}
        image="camera"
      />
    );
  }

  const PokemonCamera = require("@/components/pokemon-camera").default;
  const CameraPermission = require("@/components/camera-permission").default;

  if (favoritePokemonId && data) {
    const { imageUri } = data;
    return (
      <>
        <CameraPermission />
        <PokemonCamera pokemonImageUri={imageUri} />
      </>
    );
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
