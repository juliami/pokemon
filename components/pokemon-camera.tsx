import { Image } from "expo-image";
import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Camera as VisionCamera,
  useCameraDevice,
} from 'react-native-vision-camera';
import {
  Bounds,
  Camera,
  Face,
  FrameFaceDetectionOptions
} from 'react-native-vision-camera-face-detector';

const PokemonCamera = ({pokemonImageUri} : {pokemonImageUri: string}) => {
  const ref = useRef<VisionCamera>(null)
  const cameraDevice = useCameraDevice('front')


  const faceDetectionOptions = useRef<FrameFaceDetectionOptions>({
    // detection options
  }).current
  const [faceBound, setFaceBounds] = useState<Bounds | undefined>(undefined);

  const handleFacesDetection = (
    faces: Face[],
  ) => {
    if (faces.length && faces[0].bounds) {
      setFaceBounds(faces[0].bounds);
    } else {
      setFaceBounds(undefined);
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


  if (!cameraDevice) {
    return null;
  }

  return (
    <View style={styles.container}>


      <Camera
        style={StyleSheet.absoluteFill}
        device={cameraDevice}
        isActive={true}
        faceDetectionCallback={handleFacesDetection}
        faceDetectionOptions={faceDetectionOptions}
        ref={ref}
      />
      {faceBound && <Image
        source={pokemonImageUri}
        style={[styles.image, {
          height: getSize().height,
          width: getSize().width,
          transform: [{ translateX: '-50%' }],
          top: getPosition().top,
          right: getPosition().left
        },]}

      />}
    </View>
  )
}


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


export default PokemonCamera;