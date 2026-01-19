import { useEvent } from "expo";

import Module from "./SystemThemeModule";

const { getSystemTheme } = Module;

export function useSystemTheme() {
  const systemThemeChange = useEvent(
    Module,
    "onSystemThemeChange",
    { theme: getSystemTheme() },
  );

  return systemThemeChange.theme;
}