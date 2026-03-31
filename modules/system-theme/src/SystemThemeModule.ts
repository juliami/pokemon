import { NativeModule, requireNativeModule } from 'expo';

export enum SystemTheme {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}


export type SystemThemeEvents = {
  onSystemThemeChange: (params: { theme: SystemTheme }) => void;
}

declare class SystemThemeModule extends NativeModule<SystemThemeEvents> {
  getSystemTheme: () => SystemTheme;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<SystemThemeModule>('SystemTheme');
