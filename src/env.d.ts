interface Window {
  theme?: {
    themeValue: string;
    setPreference: () => void;
    reflectPreference: () => void;
    getTheme: () => string;
    setTheme: (val: string) => void;
  };
  articleListScene?: {
    getScene: () => string;
    setScene: (scene: string) => void;
  };
}
