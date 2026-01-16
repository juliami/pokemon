import { Button } from "react-native";
import Placeholder from "./placeholder";

import { useCameraPermission } from "react-native-vision-camera";

const CameraPermission = () => {
  const cameraPermissionStatus = useCameraPermission();
  const { hasPermission, requestPermission } = cameraPermissionStatus;

  if (!hasPermission) {
    return (
      <Placeholder text={"Camera access needed"} image="camera">
        <Button onPress={requestPermission} title="Request access" />
      </Placeholder>
    );
  }

  return null;
};

export default CameraPermission;
