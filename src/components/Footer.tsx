import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { GradientTextColorClases } from "../styles/globalTwinClasses";

const FooterWrapper = styled.footer`
  ${tw`container flex flex-col items-center`}
`;

const MadeWithLoveFooter = styled.span`
  ${tw`text-xs font-mont font-light text-dark dark:text-light mb-2`}

  strong {
    ${GradientTextColorClases}
  }
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <MadeWithLoveFooter>
        Made with <strong>♥</strong> by Félix López &copy;{" "}
        {new Date().getFullYear()}
      </MadeWithLoveFooter>
    </FooterWrapper>
  );
};

export default Footer;
