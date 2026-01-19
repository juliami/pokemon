import { requireNativeViewManager } from "expo-modules-core";
import { StyleSheet, View } from "react-native";

const AnimatedTextNativeView = requireNativeViewManager("AnimatedText");

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AnimatedTextNativeView style={{ ...StyleSheet.absoluteFillObject }} />
    </View>
  );
}
