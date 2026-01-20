import ExpoModulesCore

public class SystemThemeModule: Module {

  
  func notifyThemeChange() {
    sendEvent("onChangeTheme", [
      "theme": "changed"
    ])
  }

  public func definition() -> ModuleDefinition {
    Name("SystemTheme")


//  View(SystemThemeView.self) {
//     $0.module = self
//   }
    Function("setTheme") { (theme: String) -> Void in
      self.notifyThemeChange();
      //UIApplication.shared.keyWindow?.overrideUserInterfaceStyle = preference == "dark" ? .dark : .light
      //UserDefaults.standard.set(theme, forKey:"theme")
    }
    // Function("getTheme") { () -> String in
    //   "system"
    // }

    Events("onChangeTheme")

    OnStartObserving {
      NotificationCenter.default.addObserver(
        forName: NSNotification.Name("UserInterfaceStyleDidChange"),
        object: nil,
        queue: .main
      ) { [weak self] _ in
        self?.notifyThemeChange()
      }
    }

    OnStopObserving {
      NotificationCenter.default.removeObserver(self, name: NSNotification.Name("UserInterfaceStyleDidChange"), object: nil)
    }

    Function("getTheme") {
      guard let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene,
        let window = windowScene.windows.first
      else {
        return false
      }
      return window.traitCollection.userInterfaceStyle == .dark
    }

    // override func traitCollectionDidChange(
    //   _previousTraitCollection:
    //     UITraitCollection?
    // ) {
    //   super.traitCollectionDidChange(previousTraitCollection)
    //   if previousTraitCollection?.horizontalSizeClass != traitCollection.horizontalSizeClass {
    //     sendEvent("onChangeTheme", [
    //     "theme": "changed"
    //   ])
    //   }
    // }

  }
}
