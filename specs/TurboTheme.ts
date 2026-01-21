import { TurboModule, TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  getDeviceName(): Promise<string>;
}

export default TurboModuleRegistry.getEnforcing<Spec>("TurboTheme");
