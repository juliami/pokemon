import * as React from "react";

import { AnimatedTextViewProps } from "./AnimatedText.types";

export default function AnimatedTextView(props: AnimatedTextViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
