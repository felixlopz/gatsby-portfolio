import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useScrollDirection } from "../hooks/useScrollDirection";
import {
  LightBackgroundColorClasses,
  DarkBackgroundColorClasses,
  DarkTextColorClasses,
} from "../styles/globalTwinClasses";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const LogoWrapper = styled.div`
  ${DarkTextColorClasses}
  ${tw`absolute top-1/2 left-1/2`}

  transform: translate(-50%, -50%);

  max-width: 60px;
  display: block;

  transition: max-width 0.3s ease-in;
  transition: all 0.3s ease-in;

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;

const LogoSvg = styled.svg``;

const MenuIconWrapper = styled.div`
  ${tw`relative flex justify-center items-center z-50 cursor-pointer ml-auto`}
  width: 25px;
  height: 30px;
`;

const MenuIcon = styled.div<{ open: boolean }>`
  ${tw`w-full`}

  &,
  &::after,
  &::before {
    ${DarkBackgroundColorClasses}
    width: 100%;
    height: 3px;
    transition: all 0.3s ease;
  }
  &::after,
  &::before {
    position: absolute;
    content: "";
  }

  & {
    background: ${(props) => (props.open ? "transparent !important" : "")};
  }
  &::before {
    transform: translateY(-8px);
    transform: ${(props) => (props.open ? "rotate(45deg)" : "")};
  }
  &::after {
    transform: translateY(8px);
    transform: ${(props) => (props.open ? "rotate(-45deg)" : "")};
  }
`;

const MobileNavigationWrapper = styled.div<{ open: boolean }>`
  ${LightBackgroundColorClasses}

  ${tw`absolute top-0 left-0 w-screen h-screen z-40 flex flex-col items-center justify-center py-20`}
  transition: all 0.4s ease;
  opacity: ${(props) => (props.open ? 1 : 0)};
  transform: ${(props) => (props.open ? "translateY(0)" : "translateY(-100%)")};
`;

const NavList = styled.ul<{ open: boolean }>`
  ${tw`w-full flex items-center flex-col flex-nowrap list-none`}
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: ${(props) => (props.open ? "opacity 0.3s 0.35s ease" : "")};
`;
const NavLink = styled.li`
  ${DarkTextColorClasses}
  ${tw`font-mont font-bold text-3xl uppercase my-4`}
`;

const SocialIconsWrapper = styled.ul<{ open: boolean }>`
  ${tw`w-full flex items-center justify-center gap-x-4 mt-auto`}
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: ${(props) => (props.open ? "opacity 0.3s 0.35s ease" : "")};
`;

const SocialIcon = styled.li`
  ${DarkTextColorClasses}
`;

const StyledFontAwesome = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
`;

const MobileNavigationBalancer = styled.div`
  ${tw`opacity-0 pointer-events-none invisible mb-auto`}
  height: 24px;
`;

const HeaderWrapper = styled.header<{ scrolled: boolean }>`
  ${LightBackgroundColorClasses}

  ${tw`fixed w-full container top-0`}

  height: ${(props) => (props.scrolled ? "80px" : "163px")};

  padding-top: ${(props) => (props.scrolled ? "10px" : "32px")};
  padding-bottom: ${(props) => (props.scrolled ? "10px" : "32px")};

  justify-content: ${(props) => (props.scrolled ? "space-between" : "center")};

  ${LogoWrapper} {
    max-width: ${(props) => (props.scrolled ? "30px" : "60px")};
    left: ${(props) => (props.scrolled ? "0px" : "")};
    transform: ${(props) => (props.scrolled ? "translate(0, -50%)" : "")};
  }

  ${MenuIconWrapper} {
    visibility: ${(props) => (props.scrolled ? "visible" : "hidden")};
    opacity: ${(props) => (props.scrolled ? 1 : 0)};
    pointer-events: ${(props) => (props.scrolled ? "all" : "none")};
    margin-left: auto;
  }

  transition: height 0.2s ease-in;
`;

const HeaderContainer = styled.div`
  ${tw`w-full h-full relative flex items-center`}
`;

const Header = () => {
  const { offsetFromTop } = useScrollDirection();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (offsetFromTop > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [offsetFromTop]);

  const toggleMobileMenu = () => {
    mobileMenuOpen === true
      ? (document.body.style.overflow = "visible")
      : (document.body.style.overflow = "hidden");
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <HeaderWrapper scrolled={isScrolled}>
      <HeaderContainer>
        <LogoWrapper>
          <LogoSvg
            viewBox="0 0 512 832"
            width={512}
            height={832}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M85.9202 258.816L378.05 550.945L292.129 636.865L-0.00012207 344.736L85.9202 258.816Z"
              fill="currentColor"
            />
            <path
              d="M94.4269 0L512 417.573L426.079 503.493L8.50651 85.9204L94.4269 0Z"
              fill="currentColor"
            />
            <path
              d="M11.281 745.478L291.381 465.378L377.302 551.298L97.2013 831.398L11.281 745.478Z"
              fill="currentColor"
            />
          </LogoSvg>
        </LogoWrapper>
        <MenuIconWrapper
          onClick={() => {
            toggleMobileMenu();
          }}
        >
          <MenuIcon open={mobileMenuOpen}></MenuIcon>
        </MenuIconWrapper>
      </HeaderContainer>
      <MobileNavigationWrapper open={mobileMenuOpen}>
        <MobileNavigationBalancer />
        <NavList open={mobileMenuOpen}>
          <NavLink>Works</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
        </NavList>
        <SocialIconsWrapper open={mobileMenuOpen}>
          <SocialIcon>
            <StyledFontAwesome icon={faGithub} />
          </SocialIcon>
          <SocialIcon>
            <StyledFontAwesome icon={faInstagram} />
          </SocialIcon>
          <SocialIcon>
            <StyledFontAwesome icon={faLinkedin} />
          </SocialIcon>
        </SocialIconsWrapper>
      </MobileNavigationWrapper>
    </HeaderWrapper>
  );
};

export default Header;
