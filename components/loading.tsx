import { StyleSheet } from "react-native";

import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

const Loading = () => (
  <ThemedView style={styles.container}>
    <ThemedText>Loading...</ThemedText>
  </ThemedView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});

export default Loading;
