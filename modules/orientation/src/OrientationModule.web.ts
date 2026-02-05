import { NativeModule, registerWebModule } from "expo";

import { ChangeEventPayload } from "./Orientation.types";

type OrientationModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
};

class OrientationModule extends NativeModule<OrientationModuleEvents> {
  getOrientation() {
    return "unknown"; // Web implementation returns unknown
  }
}

export default registerWebModule(OrientationModule, "OrientationModule");
