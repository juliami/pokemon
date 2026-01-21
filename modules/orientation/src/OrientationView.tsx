import { requireNativeView } from "expo";
import * as React from "react";

import { OrientationViewProps } from "./Orientation.types";

const NativeView: React.ComponentType<OrientationViewProps> =
  requireNativeView("Orientation");

export default function OrientationView(props: OrientationViewProps) {
  return <NativeView {...props} />;
}
