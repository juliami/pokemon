import * as SystemTheme from "@/modules/system-theme/src";
import { Image } from "expo-image";
import { Button, StyleSheet, Text, View, useColorScheme } from "react-native";

import { StyledText } from "@/components/styled-text";
import { SystemThemeView } from "@/modules/system-theme/src";
import { useEffect, useState } from "react";

export default function EmptyFavoritePokemonPlaceholder() {
  const [nativeTheme, setNativeTheme] = useState<string>(
    SystemTheme.getTheme() ? "dark" : "light",
  );

  useEffect(() => {
    const subscription = SystemTheme.addThemeListener(({ theme: newTheme }) => {
      console.log("update theme");
      setNativeTheme(newTheme);
    });

    return () => subscription.remove();
  }, [setNativeTheme]);

  const reactNativeScheme = useColorScheme();
  // const nativeTheme = useSystemTheme();

  const nextTheme = reactNativeScheme !== "light" ? "dark" : "light";

  return (
    <View style={styles.container}>
      <Text>React native says - theme: {reactNativeScheme}</Text>
      <Text>My native module says - theme: {nativeTheme}</Text>
      <SystemThemeView style={{ flex: 1, backgroundColor: "purple" }} />

      <Button
        title={"Click me"}
        onPress={() => SystemTheme.setTheme(nextTheme)}
      />

      <Image
        source={require("@/assets/images/sad-pokemon.webp")}
        style={styles.image}
      />
      <StyledText style={{ textAlign: "center" }}>
        You have not picked a favorite Pokémon yet.{"\n"}Browse the list and
        select your favorite!
      </StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  row: {
    flexBasis: "50%",
    width: "100%",
  },
  image: {
    width: 200,
    height: 200,
    objectFit: "contain",
  },
});
