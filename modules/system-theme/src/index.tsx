import { NativeModule, requireNativeModule } from "expo";
import { EventSubscription } from "expo-modules-core";
import { ViewProps } from "react-native";
import { ThemeChangeEvent } from "./SystemTheme.types";
import SystemThemeModule, { SystemThemeNativeView } from "./SystemThemeModule";

type ModuleEvents = {
  onChangeTheme(event: ThemeChangeEvent): void;
};

export function getTheme(): string {
  return SystemThemeModule.getTheme();
}

export function setTheme(theme: string): void {
  return SystemThemeModule.setTheme(theme);
}
export function addThemeListener(
  listener: (event: ThemeChangeEvent) => void,
): EventSubscription {
  return SystemThemeModule.addListener("onChangeTheme", listener);
}

type Props = ViewProps;

export function SystemThemeView(props: Props) {
  return <SystemThemeNativeView {...props} />;
}

declare class SysThemeModule extends NativeModule<ModuleEvents> {}

const SysTheme = requireNativeModule<SysThemeModule>("SystemTheme");

SysTheme.addListener("onChangeTheme", (event: ThemeChangeEvent) => {
  console.log("changed theme");
});
