export type OnLoadEventPayload = {
  url: string;
};

export type ThemeChangeEvent = {
  theme: string;
};
export type SystemThemeModuleEvents = {
  onChangeTheme: (params: ThemeChangeEvent) => void;
};

export type ChangeEventPayload = {
  value: string;
};
