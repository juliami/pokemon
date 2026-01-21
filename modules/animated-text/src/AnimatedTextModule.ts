import { NativeModule, requireNativeModule } from "expo";

import {
  AnimatedTextModuleEvents,
  ThemeChangeEvent,
} from "./AnimatedText.types";

declare class AnimatedTextModule extends NativeModule<AnimatedTextModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

const NativeAnimatedTextModule =
  requireNativeModule<AnimatedTextModule>("AnimatedText");

NativeAnimatedTextModule.addListener(
  "onChangeTheme",
  (event: ThemeChangeEvent) => {
    console.log("changed theme");
  },
);

// This call loads the native module object from the JSI.
export default NativeAnimatedTextModule;
