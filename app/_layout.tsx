import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

import client from "@/api/client";
import { FavoritePokemonProvider } from "@/context/favorite-pokemon";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { ApolloProvider } from "@apollo/client/react";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <ApolloProvider client={client}>
      <FavoritePokemonProvider>
        <SafeAreaProvider>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
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
          </ThemeProvider>
        </SafeAreaProvider>
      </FavoritePokemonProvider>
    </ApolloProvider>
  );
}
