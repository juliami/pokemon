import ExpoModulesCore
import SwiftUI

class AnimatedTextViewContainer: ExpoView {
    private lazy var hostingController = UIHostingController(rootView: AnimatedTextViewContent())

    required init(appContext: AppContext? = nil) {
        super.init(appContext: appContext)

        let view = hostingController.view!
        view.backgroundColor = .clear
        addSubview(view)
    }

    override func layoutSubviews() {
        super.layoutSubviews()
        hostingController.view.frame = bounds
    }
}
