import { NativeModule, requireNativeModule } from 'expo';

import { AnimatedTextModuleEvents } from './AnimatedText.types';

declare class AnimatedTextModule extends NativeModule<AnimatedTextModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<AnimatedTextModule>('AnimatedText');
