import React from "react";
import { setDarkMode, setLightMode } from "../styles/themeMode";

const Footer = () => {
  return (
    <footer>
      <div
        onClick={() => {
          setDarkMode();
        }}
      >
        Dark
      </div>
      <div onClick={() => setLightMode()}>Light</div>
      <div>Footer</div>
      <div>Footer</div>
      <div>Footer</div>
      <div>Footer</div>
      <div>Footer</div>
      <div>Footer</div>
    </footer>
  );
};

export default Footer;
