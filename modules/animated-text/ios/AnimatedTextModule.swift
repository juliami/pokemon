import ExpoModulesCore

public class AnimatedTextModule: Module {
    public func definition() -> ModuleDefinition {
        Name("AnimatedText") // JS name

        View(AnimatedTextViewContainer.self) {
            // No props for now
        }
    }
}
