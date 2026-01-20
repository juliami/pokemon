import ExpoModulesCore
import UIKit

class SystemThemeView: ExpoView {

  weak var module: SystemThemeModule?


  override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
    super.traitCollectionDidChange(previousTraitCollection)
    module?.notifyThemeChange()

    guard traitCollection.hasDifferentColorAppearance(
      comparedTo: previousTraitCollection
    ) else { return }

  }





  override func didMoveToWindow() {
    super.didMoveToWindow()

    guard window != nil else { return }

    // initial sync
    module?.notifyThemeChange()
  }

}