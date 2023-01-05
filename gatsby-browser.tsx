require("./src/styles/global.css"); // tailwindcss setup
const {
  checkPreferredColorSchemeAndSetThemeMode,
} = require("./src/darkMode.ts");

exports.onInitialClientRender = () => {
  checkPreferredColorSchemeAndSetThemeMode();
};
