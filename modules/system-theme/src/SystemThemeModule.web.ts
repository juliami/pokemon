import { NativeModule, registerWebModule } from "expo";

import { ChangeEventPayload } from "./SystemTheme.types";

type SystemThemeModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
};

class SystemThemeModule extends NativeModule<SystemThemeModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit("onChange", { value });
  }
}

export default registerWebModule(SystemThemeModule, "SystemThemeModule");
