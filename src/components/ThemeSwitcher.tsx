import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import {
  isThemeDarkMode,
  setDarkMode,
  setLightMode,
} from "../styles/themeMode";

const Wrapper = styled.div`
  ${tw`flex items-center justify-center cursor-pointer`}
  width: 20px;
  height: 40px;
`;

const Track = styled.div`
  ${tw`relative rounded bg-[#DADADA] dark:bg-[#353535]`}

  width: 100%;
  height: 20%;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 16px;
  height: 16px;
`;

const Icon = styled.div<{ toggle: boolean }>`
  ${tw`absolute flex top-1/2 left-1/2 items-center justify-center p-1.5 rounded-full bg-dark dark:bg-light text-light dark:text-dark`}

  transform: ${({ toggle }) =>
    toggle ? `translate(25%, -50%)` : `translate(-125%, -50%)`};

  transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
`;

export const ThemeSwitcher = () => {
  const [themeDarkMode, setThemeDarkMode] = useState<boolean>(false);

  useEffect(() => {
    setThemeDarkMode(isThemeDarkMode());
  }, []);

  const switchTheme = () => {
    themeDarkMode === true ? setLightMode() : setDarkMode();
  };

  const handleSwitchClick = () => {
    switchTheme();
    setThemeDarkMode(!themeDarkMode);
  };

  return (
    <Wrapper onClick={() => handleSwitchClick()}>
      <Track>
        <Icon toggle={themeDarkMode === true}>
          {themeDarkMode === false ? (
            <StyledFontAwesomeIcon icon={faSun} />
          ) : (
            <StyledFontAwesomeIcon icon={faMoon} />
          )}
        </Icon>
      </Track>
    </Wrapper>
  );
};

export default ThemeSwitcher;
