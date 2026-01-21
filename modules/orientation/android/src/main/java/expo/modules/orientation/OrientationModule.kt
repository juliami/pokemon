package expo.modules.orientation

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class OrientationModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("Orientation")

    Events("onChange")
  }
}
