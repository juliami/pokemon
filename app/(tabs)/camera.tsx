import { StyledText } from "@/components/styled-text";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Camera, useCameraDevice } from 'react-native-vision-camera';



const CameraScreen = () => {
  const [cameraPermission, setCameraPermission] = useState<string>();

  useEffect(() => {
    (async () => {
      const cameraPermissionStatus = await Camera.requestCameraPermission();
      setCameraPermission(cameraPermissionStatus);
    })();
  }, []);
  const cameraDevice = useCameraDevice('front')

  console.log({ cameraDevice })

  // useEffect(() => {
  //   console.log(faces);
  // }, [faces]);


  // const frameProcessor = useFrameProcessor((frame) => {
  //   'worklet';
  //   const scannedFaces = scanFaces(frame);
  //   runOnJS(setFaces)(scannedFaces);
  // }, []);

  const renderDetectorContent = () => {
    if (cameraDevice && cameraPermission === 'granted') {
      return (
        <Camera
          style={StyleSheet.absoluteFill}
          device={cameraDevice}
          isActive={true}
        />
      );
    }
    return <ActivityIndicator size="large" color="#1C6758" />;
  };

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <StyledText>Camera permission status: {cameraPermission}</StyledText>


      <View style={styles.container}>

        {renderDetectorContent()}
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 500,
    backgroundColor: 'tint',
    position: 'relative'
  },
});

export default CameraScreen;
