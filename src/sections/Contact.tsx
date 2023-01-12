import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  DarkTextColorClasses,
  GradientTextColorClases,
  LightTextColorClasses,
} from "../styles/globalTwinClasses";
import { mediaQuery } from "../styles";
import { SectionBackgroundTitle } from "../components";

const ContactWrapper = styled.section`
  ${tw`container flex flex-col items-center mx-auto relative mt-24`}

  @media ${mediaQuery("md")} {
    ${tw`flex-row justify-between mb-24 mt-32`}
  }

  @media ${mediaQuery("lg")} {
    max-width: 1280px;
  }
`;

const InformationWrapper = styled.div`
  ${tw`flex flex-col items-center mx-auto`}

  @media ${mediaQuery("md")} {
    ${tw`md:mx-0 items-start`}
  }
`;

const EmailContact = styled.a`
  ${tw`text-xl text-dark dark:text-light font-mont font-semibold my-8`}

  @media ${mediaQuery("md")} {
    ${tw`mt-4 mb-8`}
  }
`;

const SocialIconsWrapper = styled.ul`
  ${tw`w-full flex items-center justify-center gap-x-4 mt-auto`}

  @media ${mediaQuery("md")} {
    ${tw`justify-start`}
  }
`;

const SocialIcon = styled.li`
  ${DarkTextColorClasses}
`;

const StyledFontAwesome = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
`;

const PictureWrapper = styled.div`
  ${tw`my-12 w-full`}
  max-width: 300px;

  @media ${mediaQuery("md")} {
    ${tw`md:my-0`}
  }
`;

const ContactPicture = styled.div`
  width: 100%;
  padding-bottom: 100%;
  border-radius: 100%;
  background-color: lightgray;
`;

const StyledSectionTitle = styled.h2`
  ${tw`font-extrabold font-mont text-center`}
  font-size: 1.75rem;
  line-height: 2.5rem;
  ${GradientTextColorClases}

  span {
    ${tw`text-dark dark:text-light`}
  }

  @media ${mediaQuery("md")} {
    ${tw`text-4xl text-left`}
  }
`;

export const Contact = () => {
  return (
    <ContactWrapper>
      <SectionBackgroundTitle>Contact</SectionBackgroundTitle>
      <InformationWrapper>
        <StyledSectionTitle>
          let's build something <br></br> <span>awesome together!</span>
        </StyledSectionTitle>
        <EmailContact>hello@felixlopez.tech</EmailContact>
        <SocialIconsWrapper>
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
      </InformationWrapper>
      <PictureWrapper>
        <ContactPicture></ContactPicture>
      </PictureWrapper>
    </ContactWrapper>
  );
};

export default Contact;
