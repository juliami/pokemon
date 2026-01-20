import { NativeModule, requireNativeModule } from "expo";
import { requireNativeViewManager } from "expo-modules-core";

import { SystemThemeModuleEvents } from "./SystemTheme.types";

declare class SystemThemeModule extends NativeModule<SystemThemeModuleEvents> {
  getTheme: () => string;
  setTheme: (theme: string) => void;
}

export const SystemThemeNativeView = requireNativeViewManager("SystemTheme");

export default requireNativeModule<SystemThemeModule>("SystemTheme");
