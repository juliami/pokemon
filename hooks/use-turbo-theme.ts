import TurboTheme from "@/specs/NativeTurboTheme";
import { useEffect, useState } from "react";
import { NativeEventEmitter } from "react-native";

export function useTurboTheme() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // Get initial theme
    TurboTheme.getCurrentTheme()
      .then((initialTheme) => {
        setTheme(initialTheme);
      })
      .catch((err) =>
        console.error("❌ useTurboTheme: Failed to get initial theme:", err),
      );

    const eventEmitter = new NativeEventEmitter(TurboTheme);
    const subscription = eventEmitter.addListener(
      "onThemeChanged",
      (newTheme: string) => {
        setTheme(newTheme);
      },
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return theme;
}
