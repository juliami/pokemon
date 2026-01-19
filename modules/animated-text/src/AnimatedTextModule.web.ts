import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './AnimatedText.types';

type AnimatedTextModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class AnimatedTextModule extends NativeModule<AnimatedTextModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(AnimatedTextModule, 'AnimatedTextModule');
