import ExpoModulesCore

public class AnimatedTextModule: Module {

  func notifyThemeChange() {
    sendEvent("onChangeTheme", [
      "theme": "changed"
    ])
  }
  
    public func definition() -> ModuleDefinition {
        Name("AnimatedText") // JS name

        View(AnimatedTextViewContainer.self) {
            // No props for now
        }

        Events("onChangeTheme")
    }
}
