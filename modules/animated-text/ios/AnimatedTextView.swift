import ExpoModulesCore
import SwiftUI

struct AnimatedTextViewContent: View {
  @State var value: Double = 0


  private let numberFormatter: NumberFormatter = {
    let formatter = NumberFormatter()
    formatter.numberStyle = .decimal
    formatter.maximumFractionDigits = 0  // whole numbers
    return formatter
  }()


  var body: some View {
    VStack {

      Text("Pokémon spotted nearby")
        .font(Font.system(size: 20))

      Text(numberFormatter.string(from: NSNumber(value: value)) ?? "0")
        .contentTransition(.numericText(value: value))
        .font(Font.system(size: 80))
        .padding(.vertical, 30)

      Button {
        self.incrementValue(with: 1)
      } label: {
        Text("I spotted another!")
      }
    }
  }

  func incrementValue(with amount: Double) {
    withAnimation {
      self.value += amount
    }
  }
}

class AnimatedTextView: ExpoView {
  // Lazy so it can reference self safely
  private lazy var hostingController = UIHostingController(rootView: AnimatedTextViewContent())
 weak var module: AnimatedTextModule?
  required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext)

    // Add SwiftUI view
    let view = hostingController.view!
    view.backgroundColor = .clear
    addSubview(view)
  }

  override func layoutSubviews() {
    super.layoutSubviews()
    hostingController.view.frame = bounds
  }



  override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
    super.traitCollectionDidChange(previousTraitCollection)
    module?.notifyThemeChange()

    guard traitCollection.hasDifferentColorAppearance(
      comparedTo: previousTraitCollection
    ) else { return }

  }
}
