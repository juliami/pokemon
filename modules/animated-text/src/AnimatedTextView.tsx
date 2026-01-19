import { requireNativeView } from 'expo';
import * as React from 'react';

import { AnimatedTextViewProps } from './AnimatedText.types';

const NativeView: React.ComponentType<AnimatedTextViewProps> =
  requireNativeView('AnimatedText');

export default function AnimatedTextView(props: AnimatedTextViewProps) {
  return <NativeView {...props} />;
}
