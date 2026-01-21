package com.juliamio.pokemon

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.turbomodule.core.interfaces.TurboModule
import com.facebook.react.bridge.Promise
import android.os.Build

class TurboTheme(reactContext: ReactApplicationContext) :
    NativeTurboThemeSpec(reactContext), TurboModule {

    override fun getDeviceName(promise: Promise) {
        promise.resolve(Build.MODEL)
    }
}