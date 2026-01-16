import Pokemon from "@/components/pokemon";
import PokemonMarker from "@/components/pokemon-marker";
import { PokemonMarkerType } from "@/context/map-markers";
import { useMapMarkersContext } from "@/hooks/use-map-markers-context";
import { getRandomPokemonID } from "@/utils/get-random-pokemon-id";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useMemo, useRef, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapView, { LatLng, Marker } from "react-native-maps";

const MapScreen = () => {
  const { markers, addMarker } = useMapMarkersContext();

  const sheetRef = useRef<BottomSheet>(null);
  const selectedMarkerRef = useRef<InstanceType<typeof Marker> | null>(null);

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

  const handleMarkerSelect = (marker: PokemonMarkerType) => {
    setSelectedPokemonId(marker.pokemonId);
    sheetRef.current?.expand();
  };

  const handleMarkerDeselection = () => {
    selectedMarkerRef.current?.hideCallout();
    selectedMarkerRef.current = null;
    setSelectedPokemonId(null);
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
          onPress={closeBottomSheet}
        >
          {markers.map((marker, index) => (
            <PokemonMarker
              pokemonId={marker.pokemonId}
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              onSelect={() => handleMarkerSelect(marker)}
              stopPropagation={true}
              ref={(ref) => {
                if (marker.pokemonId === selectedPokemonId) {
                  selectedMarkerRef.current = ref;
                }
              }}
            />
          ))}
        </MapView>
        <BottomSheet
          ref={sheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          animateOnMount={true}
          onClose={handleMarkerDeselection}
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
