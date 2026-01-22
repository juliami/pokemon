package com.nativeturbotheme

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.turbomodule.core.interfaces.TurboModule
import com.facebook.react.bridge.Promise
import com.facebook.react.modules.core.DeviceEventManagerModule
import android.content.res.Configuration
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.app.UiModeManager

class TurboTheme(reactContext: ReactApplicationContext) :
    NativeTurboThemeSpec(reactContext), TurboModule {

    private var themeChangeReceiver: BroadcastReceiver? = null
    private var isListening = false
    private var lastKnownTheme: String? = null

    init {
        lastKnownTheme = getCurrentTheme()
    }

    override fun getCurrentTheme(promise: Promise) {
        promise.resolve(getCurrentTheme())
    }

    override fun isDarkModeOn(promise: Promise) {
        promise.resolve(getCurrentTheme() == "dark")
    }

    override fun addListener(eventName: String) {
        if (eventName == "onThemeChanged" && !isListening) {
            isListening = true
            registerThemeChangeListener()
        }
    }

    override fun removeListeners(count: Double) {
        if (count == 0.0 && isListening) {
            isListening = false
            unregisterThemeChangeListener()
        }
    }

    private fun getCurrentTheme(): String {
        return try {
            val uiModeManager = reactApplicationContext?.getSystemService(Context.UI_MODE_SERVICE) as? UiModeManager
            when (uiModeManager?.nightMode) {
                UiModeManager.MODE_NIGHT_YES -> "dark"
                UiModeManager.MODE_NIGHT_NO -> "light"
                UiModeManager.MODE_NIGHT_AUTO -> {
                    // For auto mode, check current configuration
                    val config = reactApplicationContext?.resources?.configuration
                    val uiMode = config?.uiMode ?: 0
                    val nightMode = uiMode and Configuration.UI_MODE_NIGHT_MASK
                    if (nightMode == Configuration.UI_MODE_NIGHT_YES) "dark" else "light"
                }
                else -> "light"
            }
        } catch (e: Exception) {
            // Fallback to configuration
            val config = reactApplicationContext?.resources?.configuration
            val uiMode = config?.uiMode ?: 0
            val nightMode = uiMode and Configuration.UI_MODE_NIGHT_MASK
            if (nightMode == Configuration.UI_MODE_NIGHT_YES) "dark" else "light"
        }
    }

    private fun registerThemeChangeListener() {
        if (themeChangeReceiver == null) {
            themeChangeReceiver = object : BroadcastReceiver() {
                override fun onReceive(context: Context?, intent: Intent?) {
                    if (intent?.action == Intent.ACTION_CONFIGURATION_CHANGED) {
                        val newTheme = getCurrentTheme()

                        if (newTheme != lastKnownTheme) {
                            lastKnownTheme = newTheme
                            try {
                                val eventEmitter = reactApplicationContext?.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                                eventEmitter?.emit("onThemeChanged", newTheme)
                            } catch (e: Exception) {
                                // Silent error handling
                            }
                        }
                    }
                }
            }

            val filter = IntentFilter(Intent.ACTION_CONFIGURATION_CHANGED)
            reactApplicationContext?.registerReceiver(themeChangeReceiver, filter)
        }
    }

    private fun unregisterThemeChangeListener() {
        themeChangeReceiver?.let {
            reactApplicationContext?.unregisterReceiver(it)
            themeChangeReceiver = null
        }
    }

    override fun onCatalystInstanceDestroy() {
        super.onCatalystInstanceDestroy()
        unregisterThemeChangeListener()
    }
}