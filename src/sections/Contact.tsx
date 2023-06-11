import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { GradientTextColorClases } from "../styles/globalTwinClasses";
import { mediaQuery } from "../styles";
import { SectionBackgroundTitle, LinkIcon } from "../components";
import { SiUpwork } from "react-icons/si";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const ContactWrapper = styled.section`
  ${tw`container flex flex-col items-center mx-auto relative mt-24`}

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

const StyledSectionTitle = styled.h2`
  ${tw`font-extrabold font-mont text-center`}
  font-size: 1.75rem;
  line-height: 2.5rem;
  ${GradientTextColorClases}

  span {
    ${tw`text-dark dark:text-light`}
  }

  @media ${mediaQuery("md")} {
    ${tw`text-4xl`}
  }
`;

export const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <SectionBackgroundTitle>Contact</SectionBackgroundTitle>
      <InformationWrapper>
        <StyledSectionTitle>
          Let's build something <br></br> <span>awesome together!</span>
        </StyledSectionTitle>
        <EmailContact href={`mailto:${process.env.GATSBY_EMAIL_DIRECTION}`}>
          {process.env.GATSBY_EMAIL_DIRECTION}
        </EmailContact>
        <SocialIconsWrapper>
          <LinkIcon
            href={process.env.GATSBY_SOCIAL_GITHUB_URL}
            size={24}
            icon={FaGithub}
          />
          <LinkIcon
            href={process.env.GATSBY_SOCIAL_UPWORK_URL}
            size={24}
            icon={SiUpwork}
          />
          <LinkIcon
            href={process.env.GATSBY_SOCIAL_LINKEDIN_URL}
            size={24}
            icon={FaLinkedinIn}
          />
        </SocialIconsWrapper>
      </InformationWrapper>
    </ContactWrapper>
  );
};

export default Contact;
