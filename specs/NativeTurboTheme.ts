import { TurboModule, TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  getCurrentTheme(): Promise<string>;
  isDarkModeOn(): Promise<boolean>;
  addListener(eventName: string): void;
  removeListeners(count: number): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>("NativeTurboTheme");
