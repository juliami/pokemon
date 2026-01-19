// Reexport the native module. On web, it will be resolved to AnimatedTextModule.web.ts
// and on native platforms to AnimatedTextModule.ts
export { default } from './src/AnimatedTextModule';
export { default as AnimatedTextView } from './src/AnimatedTextView';
export * from  './src/AnimatedText.types';
