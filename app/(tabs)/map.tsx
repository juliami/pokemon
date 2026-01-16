import { useMapMarkersContext } from "@/hooks/use-map-markers-context";
import { getRandomPokemonID } from "@/utils/get-random-pokemon-id";
import React from "react";
import MapView, { LatLng, Marker } from "react-native-maps";

interface PokemonMarker extends LatLng {
  pokemonId: number;
}

const MapScreen = () => {
  const { markers, addMarker, removeMarker } = useMapMarkersContext();

  const handleMapLongClick = (event: {
    nativeEvent: { coordinate: LatLng };
  }) => {
    const pokemonId = getRandomPokemonID();
    const { coordinate } = event.nativeEvent;
    addMarker({ ...coordinate, pokemonId });
  };

  const handleMarkerPress = (marker: PokemonMarker) => {
    console.log("Marker pressed, Pokémon ID:", marker.pokemonId);
  };

  return (
    <MapView style={{ flex: 1 }} onLongPress={handleMapLongClick}>
      {markers.map((marker, index) => (
        <Marker
          key={index}
          coordinate={marker}
          onPress={() => handleMarkerPress(marker)}
        />
      ))}
    </MapView>
  );
};

export default MapScreen;
