import { Platform } from "react-native";

type WebButtonProps = {
  onClick: () => void;
  text: string;
};

export const WebButton = ({ onClick, text }: WebButtonProps) => {
  if (Platform.OS !== "web") {
    return null;
  }
  return (
    <button
      onClick={onClick}
      style={{ marginBottom: 16, padding: 8, fontSize: 16 }}
    >
      {text}
    </button>
  );
};
