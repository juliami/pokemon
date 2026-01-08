import { StyleSheet, View, type ViewProps } from "react-native";

export function SimpleView({ ...props }: ViewProps) {
  return <View style={[styles.simpleView]} {...props} />;
}

const styles = StyleSheet.create({
  simpleView: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
});
