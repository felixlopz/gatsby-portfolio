import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  DarkTextColorClasses,
  GradientTextColorClases,
} from "../styles/globalTwinClasses";
import { mediaQuery } from "../styles";
import { SectionBackgroundTitle } from "../components";
import UpworkIcon from "../images/upwork.svg";

const ContactWrapper = styled.section`
  ${tw`container flex flex-col items-center mx-auto relative`}

  @media ${mediaQuery("md")} {
    ${tw`flex-row justify-center mb-24 mt-32`}
    margin-top: 200px;
  }

  @media ${mediaQuery("lg")} {
    max-width: 1280px;
    margin-top: 300px;
  }
`;

const InformationWrapper = styled.div`
  ${tw`flex flex-col items-center mx-auto mb-20`}

  @media ${mediaQuery("md")} {
    ${tw`md:mx-0`}
  }
`;

const EmailContact = styled.a`
  ${tw`text-xl text-dark dark:text-light font-mont font-semibold my-8 hover:opacity-50 transition-[opacity]`}

  @media ${mediaQuery("md")} {
    ${tw`mt-4 mb-8`}
  }
`;

const SocialIconsWrapper = styled.ul`
  ${tw`w-full flex items-center justify-center gap-x-4 mt-auto`}
`;

const SocialIcon = styled.li`
  ${DarkTextColorClasses}
  ${tw`hover:opacity-50 transition-[opacity]`}
`;

const IconWrapper = styled.svg`
  width: 24px;
  height: 24px;
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
  console.log(process.env.REACT_APP_SOCIAL_GITHUB_URL);

  return (
    <ContactWrapper id="contact">
      <SectionBackgroundTitle>Contact</SectionBackgroundTitle>
      <InformationWrapper>
        <StyledSectionTitle>
          Let's build something <br></br> <span>awesome together!</span>
        </StyledSectionTitle>
        <EmailContact href={`mailto:${process.env.REACT_APP_EMAIL_DIRECTION}`}>
          {process.env.REACT_APP_EMAIL_DIRECTION}
        </EmailContact>
        <SocialIconsWrapper>
          <SocialIcon>
            <a
              href={process.env.REACT_APP_SOCIAL_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledFontAwesome icon={faGithub} />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a
              href={process.env.REACT_APP_SOCIAL_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledFontAwesome icon={faLinkedin} />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a
              href={process.env.REACT_APP_SOCIAL_UPWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper viewBox="0 0 54 39" width={54} height={39}>
                <UpworkIcon />
              </IconWrapper>
            </a>
          </SocialIcon>
        </SocialIconsWrapper>
      </InformationWrapper>
    </ContactWrapper>
  );
};

export default Contact;
