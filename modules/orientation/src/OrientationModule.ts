import { NativeModule, requireNativeModule } from "expo";

import { OrientationModuleEvents } from "./Orientation.types";

declare class OrientationModule extends NativeModule<OrientationModuleEvents> {
  getOrientation(): string;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<OrientationModule>("Orientation");
