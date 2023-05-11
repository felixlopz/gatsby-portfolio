import { theme } from "twin.macro";

// TODO: import this object from tailwind theme config and get the keys
const screens = {
  sm: "640px",
  md: "1024px",
  lg: "1440px",
};

type MediaQuery = keyof typeof screens;

export const mediaQuery = (key: MediaQuery) => {
  return `(min-width: ${screens[key]})`;
};

export const getValueOfScreenMediaQueryFromThemeAsNumber = (
  key: MediaQuery
): number => {
  const valueOfMediaQueryFromTheme = screens[key];
  return Number(valueOfMediaQueryFromTheme.toString().replace("px", ""));
};
