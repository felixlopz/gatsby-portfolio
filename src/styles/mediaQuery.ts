// TODO: import this object from tailwind theme config and get the keys
const screens = {
  sm: "640px",
  md: "1024px",
  lg: "1440px",
};

export const mediaQuery = (key: keyof typeof screens) => {
  return `(min-width: ${screens[key]})`;
};
