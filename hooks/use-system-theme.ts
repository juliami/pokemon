import * as SystemTheme from "@/modules/system-theme/src";
import { useEffect, useState } from "react";

// const emitter = new EventEmitter(SystemTheme);

export const useSystemTheme = () => {
  const [theme, setTheme] = useState<string>(() => {
    return SystemTheme.getTheme() ? "dark" : "light";
  });

  useEffect(() => {
    // const subscription = SystemTheme.addListener(
    //   'onThemeChange',
    //   (event: { isDark: boolean }) => {
    //     console.log('change')
    //     setIsDark(event.isDark);
    //   }
    // );
    // return () => {
    //   subscription.remove();
    // };
  }, []);

  return theme;
};
