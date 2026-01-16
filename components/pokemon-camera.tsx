import { Image } from "expo-image";
import { useRef, useState } from "react";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Frame,
  Camera as VisionCamera,
  useCameraDevice,
} from "react-native-vision-camera";
import {
  Bounds,
  Camera,
  Face
} from "react-native-vision-camera-face-detector";


const SCALE_DOWN_RATIO = 0.4;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PokemonCamera = ({ pokemonImageUri }: { pokemonImageUri: string }) => {
  const cameraRef = useRef<VisionCamera>(null);
  const cameraDevice = useCameraDevice("front");

  const platformSpecificScaling = Platform.OS === "ios" ? 0.45 : 1;

  // const faceDetectionOptions = useRef<FrameFaceDetectionOptions>({}).current;
  const [faceBound, setFaceBounds] = useState<Bounds | undefined>(undefined);

  if (!cameraDevice) {
    return null;
  }

  const handleFacesDetection = (faces: Face[], frame: Frame) => {
    if (faces.length && faces[0].bounds) {
      setFaceBounds(faces[0].bounds);
    } else {
      setFaceBounds(undefined);
    }
  };

  const getSize = () => {
    if (!faceBound?.height || !faceBound.width) {
      return {};
    }
    return {
      height: faceBound?.height * SCALE_DOWN_RATIO,
      width: faceBound?.width * SCALE_DOWN_RATIO,
    };
  };

  const getPosition = () => {
    if (!faceBound?.x || !faceBound.y) {
      return {};
    }
    return { right: faceBound?.x, top: faceBound?.y };
  };
  // console.log({windowWidth})
  console.log({faceBound})

  return (
    <SafeAreaView style={styles.container}>
      {faceBound && (
        <Image
          source={pokemonImageUri}
          style={[
            styles.image,
            {
              height: getSize().height,
              width: getSize().width,
              top: getPosition().top,
               right: getPosition().right,
            },
          ]}
        />
      )}

      <Camera
        style={StyleSheet.absoluteFillObject}
        device={cameraDevice}
        isActive={true}
        faceDetectionCallback={handleFacesDetection}
        faceDetectionOptions={{
          autoMode: true,
          windowHeight,
          windowWidth
          
        }}
        ref={cameraRef}
        photo={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
  },

  capture: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0)",
    transform: [{ translateX: "-50%"}, {translateY: "-50%"}],
    zIndex: 10,
  },
});

export default PokemonCamera;
