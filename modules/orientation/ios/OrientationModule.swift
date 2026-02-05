import ExpoModulesCore

public class OrientationModule: Module {
  private var orientationObserver: NSObjectProtocol?
  
  public func definition() -> ModuleDefinition {
    Name("Orientation")

    Events("onChange")

    Function("getOrientation") {
      let orientation = UIDevice.current.orientation
      switch orientation {
      case .portrait, .portraitUpsideDown:
        return "portrait"
      case .landscapeLeft, .landscapeRight:
        return "landscape"
      default:
        return "unknown"
      }
    }
    
    OnStartObserving {
      self.startOrientationObserver()
    }
    
    OnStopObserving {
      self.stopOrientationObserver()
    }
  }
  
  private func startOrientationObserver() {
    UIDevice.current.beginGeneratingDeviceOrientationNotifications()
    
    orientationObserver = NotificationCenter.default.addObserver(
      forName: UIDevice.orientationDidChangeNotification,
      object: UIDevice.current,
      queue: .main
    ) { [weak self] _ in
      let orientation = UIDevice.current.orientation
      let orientationString: String
      switch orientation {
      case .portrait, .portraitUpsideDown:
        orientationString = "portrait"
      case .landscapeLeft, .landscapeRight:
        orientationString = "landscape"
      default:
        orientationString = "unknown"
      }
      self?.sendEvent("onChange", ["value": orientationString])
    }
  }
  
  private func stopOrientationObserver() {
    if let observer = orientationObserver {
      NotificationCenter.default.removeObserver(observer)
      orientationObserver = nil
    }
    UIDevice.current.endGeneratingDeviceOrientationNotifications()
  }
}