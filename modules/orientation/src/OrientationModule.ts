import { NativeModule, requireNativeModule } from "expo";

import { OrientationModuleEvents } from "./Orientation.types";

declare class OrientationModule extends NativeModule<OrientationModuleEvents> {
  PI: number;
  hello(): string;
  getOrientation(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<OrientationModule>("Orientation");
