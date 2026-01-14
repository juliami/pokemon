import { Image } from "expo-image";
import { useRef, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Camera as VisionCamera,
  useCameraDevice,
  useCameraPermission
} from 'react-native-vision-camera';
import {
  Bounds,
  Camera,
  Face,
  FrameFaceDetectionOptions
} from 'react-native-vision-camera-face-detector';

const CameraScreen = () => {
  const [faceBound, setFaceBounds] = useState<Bounds | undefined>(undefined);

  const cameraPermissionStatus = useCameraPermission();
  const { hasPermission, requestPermission } = cameraPermissionStatus;

  const faceDetectionOptions = useRef<FrameFaceDetectionOptions>({
    // detection options
  }).current

  const ref = useRef<VisionCamera>(null)


  const cameraDevice = useCameraDevice('front')

  console.log({ cameraPermissionStatus })

  const handlePress = () => {
    requestPermission().then((result) => console.log({ result }));
  }

  const handleFacesDetection = (
    faces: Face[],
  ) => {
    if (faces[0].bounds) {
      setFaceBounds(faces[0].bounds)
    } else {
      setFaceBounds(undefined)
    }
  }

  const getSize = () => {
    if (!faceBound?.height || !faceBound.width) {
      return {}
    }
    return ({ height: faceBound?.height * 0.4, width: faceBound?.width * 0.4 })
  }

  const getPosition = () => {
    if (!faceBound?.x || !faceBound.y) {
      return {}
    }
    return ({ left: faceBound?.x, top: faceBound?.y })
  }



  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <View style={styles.container}>

        {hasPermission && cameraDevice && <Camera
          style={StyleSheet.absoluteFill}
          device={cameraDevice}
          isActive={true}
          faceDetectionCallback={handleFacesDetection}
          faceDetectionOptions={faceDetectionOptions}
          ref={ref}
        />}
        {!hasPermission && <Button onPress={handlePress} title="Request" />}
        {faceBound && <Image
          source={require("@/assets/images/sad-pokemon.webp")}
          style={[styles.image, {
            height: getSize().height,
            width: getSize().width,
            transform: [{ translateX: '-50%' }],
            top: getPosition().top,
            right: getPosition().left
          },]}

        />}
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  cameraWrapper: {
    position: 'relative'
  },
  image: {
    width: 300,
    height: 300,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0)',


  }
});

export default CameraScreen;
