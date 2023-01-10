import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../components";
import {
  DarkTextColorClasses,
  GradientTextColorClases,
} from "../styles/globalTwinClasses";

const Title = styled.h1`
  ${DarkTextColorClasses}
  ${tw`font-extrabold font-mont mb-6`}
  font-size: 1.75rem;
  line-height: 2.5rem;
  span {
    ${GradientTextColorClases}
  }
`;

const SubTitle = styled.p`
  ${DarkTextColorClasses}
  ${tw`font-light font-mont text-base`}
`;

const HeroWrapper = styled.section`
  ${tw`container`}
  margin-top: 163px;
`;

const InfoWrapper = styled.div`
  ${tw`flex flex-col`}
`;

const StyledButton = styled(Button)`
  ${tw`mt-6 self-center`}
`;

const FigureWrapper = styled.div``;

export const Hero = () => {
  return (
    <HeroWrapper>
      <InfoWrapper>
        <Title>
          hello <br></br> i’m Félix López <br></br>{" "}
          <span>creative developer</span>
        </Title>
        <SubTitle>
          4+ years of experience working on frontend and backend web/mobile
          projects.
        </SubTitle>
        <StyledButton>my works</StyledButton>
      </InfoWrapper>
    </HeroWrapper>
  );
};

export default Hero;
