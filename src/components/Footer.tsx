import React from "react";
import { setDarkMode, setLightMode } from "../darkMode";

const Footer = () => {
  return (
    <>
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
    </>
  );
};

export default Footer;
