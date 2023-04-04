export enum ThemeMode {
  Dark = "dark",
  Light = "light",
}

export function checkPreferredColorSchemeAndSetThemeMode() {
  // TODO: change to be in pair with the actual theme of preference

  if (
    localStorage.theme === ThemeMode.Dark ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    setDarkMode();
  } else {
    setLightMode();
  }
}

export function setLightMode() {
  localStorage.theme = ThemeMode.Light;
  document.documentElement.classList.remove(ThemeMode.Dark);
}

export function setDarkMode() {
  localStorage.theme = ThemeMode.Dark;
  document.documentElement.classList.add(ThemeMode.Dark);
}

export function getCurrentThemeMode(): ThemeMode {
  return localStorage.theme;
}

export function isThemeDarkMode(): boolean {
  return localStorage.theme === ThemeMode.Dark;
}
