import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

import client from "@/api/client";
import { FavoritePokemonProvider } from "@/context/favorite-pokemon";
import { MapMarkersProvider } from "@/context/map-markers";
import { useTurboTheme } from "@/hooks/use-turbo-theme";

import { ApolloProvider } from "@apollo/client/react";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const turboTheme = useTurboTheme();
  console.log({ turboTheme });

  return (
    <ApolloProvider client={client}>
      <FavoritePokemonProvider>
        <MapMarkersProvider>
          <SafeAreaProvider>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen
                name="pokemon/[id]"
                options={{
                  headerShown: Platform.OS === "web",
                  presentation: "modal",
                }}
              />
            </Stack>
            <StatusBar style="auto" />
          </SafeAreaProvider>
        </MapMarkersProvider>
      </FavoritePokemonProvider>
    </ApolloProvider>
  );
}
