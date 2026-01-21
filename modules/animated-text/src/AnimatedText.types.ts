import type { StyleProp, ViewStyle } from "react-native";

export type OnLoadEventPayload = {
  url: string;
};

export type ThemeChangeEvent = {
  theme: string;
};

export type AnimatedTextModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
  onChangeTheme: (params: ThemeChangeEvent) => void;
};

export type ChangeEventPayload = {
  value: string;
};

export type AnimatedTextViewProps = {
  url: string;
  onLoad: (event: { nativeEvent: OnLoadEventPayload }) => void;
  style?: StyleProp<ViewStyle>;
};
