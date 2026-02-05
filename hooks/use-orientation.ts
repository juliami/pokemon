import OrientationModule from "@/modules/orientation/src/OrientationModule";

import { useEvent } from "expo";

const { getOrientation } = OrientationModule;

export function useOrientation() {
  const orientationChange = useEvent(OrientationModule, "onChange", {
    value: getOrientation(),
  });

  return orientationChange?.value;
}
