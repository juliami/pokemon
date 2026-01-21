import { Gaps } from "@/constants/layout";
import { Colors } from "@/constants/theme";
import { ActivityIndicator, View } from "react-native";

const ListItemActivityIndicator = () => (
  <View style={{ paddingBlock: Gaps.medium }}>
    <ActivityIndicator size="large" color={Colors.tint} />
  </View>
);

export default ListItemActivityIndicator;
