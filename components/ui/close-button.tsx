import { Platform, Pressable } from "react-native";
import { IconSymbol } from "./icon-symbol";

const CloseButton = ({ onPress }: { onPress: () => void }) => {
  if (Platform.OS === "web") {
    return null;
  }
  return (
    <Pressable onPress={onPress}>
      <IconSymbol size={32} name={"xmark"} color={"#fff"} />
    </Pressable>
  );
};

export default CloseButton;
