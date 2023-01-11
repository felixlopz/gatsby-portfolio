import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { DarkTextColorClasses } from "../styles/globalTwinClasses";
import { SectionTitle } from "../components";

const ContactWrapper = styled.section`
  ${tw`container flex flex-col items-center`}
`;

const EmailContact = styled.a`
  ${tw`text-lg text-dark dark:text-light font-mont font-semibold mt-2 mb-4`}
`;

const SocialIconsWrapper = styled.ul`
  ${tw`w-full flex items-center justify-center gap-x-4 mt-auto`}
`;

const SocialIcon = styled.li`
  ${DarkTextColorClasses}
`;

const StyledFontAwesome = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
`;

const PictureWrapper = styled.div`
  ${tw`my-12`}

  max-width: 250px;
  width: 100%;
  padding-bottom: 75%;
  border-radius: 100%;
  background-color: lightgray;
`;

export const Contact = () => {
  return (
    <ContactWrapper>
      <SectionTitle backgroundTitle="Contact">
        let’s build something{" "}
        <strong className="text-dark dark:text-light">awesome together</strong>
      </SectionTitle>
      <EmailContact>hello@felix.tech</EmailContact>
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
      <PictureWrapper></PictureWrapper>
    </ContactWrapper>
  );
};

export default Contact;
