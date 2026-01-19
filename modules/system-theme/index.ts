// Reexport the native module. On web, it will be resolved to SystemThemeModule.web.ts
// and on native platforms to SystemThemeModule.ts
export { default } from './src/SystemThemeModule';
export { useSystemTheme } from './src/useSystemTheme';

