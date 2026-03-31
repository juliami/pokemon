import ExpoModulesCore
import UIKit

public class SystemThemeModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
    
  private var themeObserver: Any?
    
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('SystemTheme')` in JavaScript.
    Name("SystemTheme")

    Events("onSystemThemeChange")
    
    Function("getSystemTheme") {
      return getSystemTheme()
    }

   OnStartObserving {
      themeObserver = NotificationCenter.default.addObserver(
        forName: NSNotification.Name.RCTUserInterfaceStyleDidChange, object: nil, queue: nil, using: didChangeSystemTheme
      )
    }

    OnStopObserving {
        if let observer = themeObserver {
            // TODO: check if works with many observing hooks
            NotificationCenter.default.removeObserver(observer)
            themeObserver = nil
        }
    }
  }

  @objc func didChangeSystemTheme(notification: Notification) {
      self.sendEvent("onSystemThemeChange", [
        "theme": getSystemTheme()
      ])
    }

  func getSystemTheme() -> String {
    let style = UIScreen.main.traitCollection.userInterfaceStyle  
    return style == .dark ? "DARK" : "LIGHT"   
  }
}
