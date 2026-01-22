package com.nativeturbotheme

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider
import java.util.Arrays

class TurboThemeProvider : TurboReactPackage() {
  override fun getModule(
    name: String,
    reactContext: ReactApplicationContext
  ): NativeModule? =
    if (name == "NativeTurboTheme") TurboTheme(reactContext) else null

  override fun getReactModuleInfoProvider(): ReactModuleInfoProvider =
    ReactModuleInfoProvider {
      val moduleInfos: MutableMap<String, ReactModuleInfo> = HashMap()
      val isTurboModule = true
      moduleInfos["NativeTurboTheme"] = ReactModuleInfo(
        "NativeTurboTheme",
        TurboTheme::class.java.name,
        false,  // canOverrideExistingModule
        false,  // needsEagerInit
        true,   // hasConstants
        false,  // isCxxModule
        isTurboModule
      )
      moduleInfos
    }
}