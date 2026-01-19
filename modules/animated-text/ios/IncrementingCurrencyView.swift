import SwiftUI

// Model to store the value (ObservableObject for two-way binding)
final class CurrencyModel: ObservableObject {
  @Published var value: Double = 0
}

// SwiftUI view
struct IncrementingCurrencyView: View {
  @ObservedObject var model: CurrencyModel
  var onChange: ((Double) -> Void)?  // Optional callback to JS

  var body: some View {
    VStack(spacing: 12) {
      Text("$\(model.value, specifier: "%.2f")")
        .font(.largeTitle)
        .bold()

      Button("More money") {
        model.value += 11.99
        onChange?(model.value)   // Call JS callback
      }
    }
  }
}
