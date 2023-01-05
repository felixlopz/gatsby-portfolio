export function checkPreferredColorSchemeAndSetThemeMode() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    setDarkMode();
  } else {
    setLightMode();
  }
}

export function setLightMode() {
  localStorage.theme = "light";
  document.documentElement.classList.remove("dark");
}

export function setDarkMode() {
  localStorage.theme = "dark";
  document.documentElement.classList.add("dark");
}
