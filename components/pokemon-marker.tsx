import { Colors, PokemonColors } from "@/constants/theme";
import { useGetPokemonByIdQuery } from "@/hooks/use-get-pokemon-by-id";
import React from "react";
import { MapMarkerProps, Marker } from "react-native-maps";


type PokemonMarkerProps = MapMarkerProps & {
  pokemonId: number;
};

const PokemonMarker: React.FC<PokemonMarkerProps> = ({
  pokemonId,
  ...markerProps
}) => {
  const  pokemon = useGetPokemonByIdQuery(pokemonId);
  const color = pokemon?.data?.color ? PokemonColors[pokemon?.data.color].default : Colors.tint;
  return <Marker  {...markerProps} pinColor={color}  />;
};

export default PokemonMarker;