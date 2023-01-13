require("./src/styles/global.css"); // tailwindcss setup
const {
  checkPreferredColorSchemeAndSetThemeMode,
} = require("./src/styles/themeMode.ts");

exports.onRouteUpdate = () => {
  checkPreferredColorSchemeAndSetThemeMode();
};
