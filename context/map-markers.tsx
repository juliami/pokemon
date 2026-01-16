import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import { LatLng } from "react-native-maps";

interface PokemonMarker extends LatLng {
  pokemonId: number;
}

interface MapMarkersContextProps {
  markers: PokemonMarker[];
  addMarker: (marker: PokemonMarker) => void;
  removeMarker: (index: number) => void;
}

export const MapMarkersContext = createContext<MapMarkersContextProps>({
  markers: [],
  addMarker: () => {},
  removeMarker: () => {},
});

const MAP_MARKERS_KEY = "pokemon-markers";

export const MapMarkersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [markers, setMarkers] = useState<PokemonMarker[]>([]);

  useEffect(() => {
    (async () => {
      const stored = await AsyncStorage.getItem(MAP_MARKERS_KEY);
      if (stored) {
        try {
          setMarkers(JSON.parse(stored));
        } catch (e) {
          console.warn("Failed to parse stored markers:", e);
        }
      }
    })();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(MAP_MARKERS_KEY, JSON.stringify(markers));
  }, [markers]);

  const addMarker = (marker: PokemonMarker) => {
    setMarkers((prev) => [...prev, marker]);
  };

  const removeMarker = (index: number) => {
    setMarkers((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <MapMarkersContext.Provider value={{ markers, addMarker, removeMarker }}>
      {children}
    </MapMarkersContext.Provider>
  );
};
