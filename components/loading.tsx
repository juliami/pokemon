import { StyleSheet, View } from "react-native";

import { StyledText } from "./styled-text";

const Loading = () => (
  <View style={styles.container}>
    <StyledText>Loading...</StyledText>
  </View>
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
