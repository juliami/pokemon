package expo.modules.orientation

import android.content.res.Configuration
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class OrientationModule : Module() {
  private var listener: android.content.ComponentCallbacks? = null

  override fun definition() = ModuleDefinition {
    Name("Orientation")
    Events("onChange")

    Function("getOrientation") {
      getOrientationString(appContext.reactContext?.resources?.configuration?.orientation)
    }

    OnStartObserving {
      val reactContext = appContext.reactContext ?: return@OnStartObserving
      listener = object : android.content.ComponentCallbacks {
        override fun onConfigurationChanged(newConfig: Configuration) {
          sendEvent("onChange", mapOf("value" to getOrientationString(newConfig.orientation)))
        }
        override fun onLowMemory() {}
      }.also { reactContext.registerComponentCallbacks(it) }
    }

    OnStopObserving {
      listener?.let { appContext.reactContext?.unregisterComponentCallbacks(it) }
      listener = null
    }
  }

  private fun getOrientationString(orientation: Int?) = when (orientation) {
    1 -> "portrait"
    2 -> "landscape"
    else -> "unknown"
  }
}
