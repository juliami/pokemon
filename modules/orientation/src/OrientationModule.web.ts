import { registerWebModule, NativeModule } from "expo";

import { ChangeEventPayload } from "./Orientation.types";

type OrientationModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
};

class OrientationModule extends NativeModule<OrientationModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit("onChange", { value });
  }
  hello() {
    return "Hello world! 👋";
  }
}

export default registerWebModule(OrientationModule, "OrientationModule");
