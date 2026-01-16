import Pokemon from "@/components/pokemon";
import { useMapMarkersContext } from "@/hooks/use-map-markers-context";
import { getRandomPokemonID } from "@/utils/get-random-pokemon-id";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useMemo, useRef, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapView, { LatLng, Marker } from "react-native-maps";

interface PokemonMarker extends LatLng {
  pokemonId: number;
}

const MapScreen = () => {
  const { markers, addMarker } = useMapMarkersContext();
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["5%", "40%"], []);
  const [selectedPokemonId, setSelectedPokemonId] = useState<number | null>(
    null,
  );

  const handleMapLongPress = (event: {
    nativeEvent: { coordinate: LatLng };
  }) => {
    const pokemonId = getRandomPokemonID();
    const { coordinate } = event.nativeEvent;
    addMarker({ ...coordinate, pokemonId });
  };

  const handleMarkerSelect = (marker: PokemonMarker) => {
    setSelectedPokemonId(marker.pokemonId);
    sheetRef.current?.expand();
  };

  const closeBottomSheet = () => {
    sheetRef.current?.close();
  };

  return (
    <>
      <GestureHandlerRootView style={styles.container}>
        <MapView
          style={{ flex: 1 }}
          onLongPress={handleMapLongPress}
          onPress={(e) => closeBottomSheet(e)}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker}
              onSelect={handleMarkerSelect}
              stopPropagation={true}
            />
          ))}
        </MapView>
        <BottomSheet
          ref={sheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          animateOnMount={true}
        >
          <BottomSheetView style={styles.sheetContent}>
            {selectedPokemonId ? (
              <Pokemon
                id={selectedPokemonId.toString()}
                showCloseButton={false}
                showPokemonData={false}
              />
            ) : (
              <Text style={styles.title}>No Pokémon selected</Text>
            )}
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  sheetContent: {
    flex: 1,
  },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#555" },
});

export default MapScreen;
