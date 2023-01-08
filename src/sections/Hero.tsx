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
  ${tw`font-extrabold font-mont text-center mb-6`}
  font-size: 1.75rem;
  line-height: 2.5rem;
  span {
    ${GradientTextColorClases}
  }
`;

const SubTitle = styled.p`
  ${DarkTextColorClasses}
  ${tw`font-light font-mont text-base text-center`}
`;

const HeroWrapper = styled.section`
  ${tw`container`}
  margin-top: 163px;
`;

const InfoWrapper = styled.div`
  ${tw`flex flex-col items-center justify-center`}
`;

const StyledButton = styled(Button)`
  ${tw`mt-6`}
`;

const FigureWrapper = styled.div``;

export const Hero = () => {
  return (
    <HeroWrapper>
      <InfoWrapper>
        <Title>
          hello, i’m Félix López, <span>software engineer</span>
        </Title>
        <SubTitle>
          4+ years of experience working with backend / frontend technologies.
        </SubTitle>
        <StyledButton>my works</StyledButton>
      </InfoWrapper>
    </HeroWrapper>
  );
};

export default Hero;
