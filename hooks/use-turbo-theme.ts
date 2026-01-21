import TurboTheme from "@/specs/TurboTheme";
import { useEffect, useState } from "react";

export const useTurboTheme = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    TurboTheme.getDeviceName()
      .then((name: string) => {
        console.log("name", name);
        setTheme(name);
      })
      .catch((err: Error) => console.error("TurboTheme error", err));
  }, []);

  return theme;
};
