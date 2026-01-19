import { Colors, PokemonColors } from "@/constants/theme";
import { useGetPokemonByIdQuery } from "@/hooks/use-get-pokemon-by-id";
import React, { forwardRef } from "react";
import { MapMarkerProps, Marker } from "react-native-maps";

export type PokemonMarkerProps = MapMarkerProps & {
  pokemonId: number;
};

const PokemonMarker = forwardRef<
  InstanceType<typeof Marker>,
  PokemonMarkerProps
>(({ pokemonId, ...markerProps }, ref) => {
  const pokemon = useGetPokemonByIdQuery(pokemonId);

  const color = pokemon?.data?.color
    ? PokemonColors[pokemon.data.color].default
    : Colors.tint;

  return <Marker ref={ref} {...markerProps} pinColor={color} />;
});

PokemonMarker.displayName = "PokemonMarker";

export default PokemonMarker;
