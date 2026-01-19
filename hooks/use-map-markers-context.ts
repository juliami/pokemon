import { MapMarkersContext } from "@/context/map-markers";
import { useContext } from "react";

export const useMapMarkersContext = () => {
  const context = useContext(MapMarkersContext);
  if (!context) throw new Error("Must be used within MapMarkersProvider");
  return context;
};
