import {
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export const useParallaxStyle = ({
  intensity = 1,
  offsetX = 0,
  offsetY = 0,
  scale = 1,
}: {
  intensity?: number;
  offsetX?: number;
  offsetY?: number;
  scale?: number;
} = {}) => {
  const rotation = useAnimatedSensor(SensorType.ROTATION, {
    interval: 20,
  });

  return useAnimatedStyle(() => {
    const { pitch = 0, roll = 0 } = rotation.sensor.value || {};
    return {
      transform: [
        {
          translateX: withSpring(-roll * 10 * intensity + offsetX, {
            damping: 200,
          }),
        },
        {
          translateY: withSpring(-pitch * 10 * intensity + offsetY, {
            damping: 200,
          }),
        },
        { scale: scale },
      ],
    };
  });
};
