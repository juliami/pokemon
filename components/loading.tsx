import { Gaps } from "@/constants/layout";
import { Colors } from "@/constants/theme";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { StyledText } from "./styled-text";

const Loading = ({text}: {text: string}) => (
  <View style={styles.container}>
    <ActivityIndicator size="large"  color={Colors.tint}/>
    <StyledText style={styles.text}>{text}</StyledText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  text: {
    marginTop: Gaps.small,
    color: Colors.icon
  }
});

export default Loading;
