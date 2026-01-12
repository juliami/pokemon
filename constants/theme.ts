/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

interface ColorSet {
    default: string;
    darker: string;
}
export type PokemonColorKey = 'black' | 'blue' | 'brown' | 'gray' | 'green' | 'pink' | 'purple' | 'red' | 'white' | 'yellow';

type PokemonColorsType = {
    [key in PokemonColorKey]: ColorSet;
};

export const PokemonColors: PokemonColorsType = {
    black: { default: "#3e3e40", darker: "#2a2a2c" },
    blue: { default: "#7daed6", darker: "#488bc3" },
    brown: { default: "#aa8a7b", darker: "#7f6658" },
    gray: { default: "#b0b0b3", darker: "#878789" },
    green: { default: "#8db594", darker: "#688b70" },
    pink: { default: "#f7b5c4", darker: "#d4929f" },
    purple: { default: "#b48dbf", darker: "#8a6a92" },
    red: { default: "#fc6c6e", darker: "#c45254" },
    white: { default: "#b0abc5", darker: "#9791b0" },
    yellow: { default: "#e6c131", darker: "#ac8a2e" }
}

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
