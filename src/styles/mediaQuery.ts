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
  // does not work dynamically for some reason, ERROR: The theme value doesn’t look right
  // const themeKey: string = `screens.${key}`;

  const valueOfMediaQueryFromTheme = theme`screens.md`;

  return Number(valueOfMediaQueryFromTheme.toString().replace("px", ""));
};
