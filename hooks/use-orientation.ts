import OrientationModule from "@/modules/orientation/src/OrientationModule";

import { useEvent } from "expo";

const { getOrientation } = OrientationModule;

export function useOrientation() {
  const orientationChange = useEvent(
    OrientationModule,
    // native module emits `onChange` with payload { value: string }
    "onChange",
    { value: getOrientation() },
  );

  return orientationChange?.value;
}
