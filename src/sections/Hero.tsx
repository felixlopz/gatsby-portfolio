import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import tw from "twin.macro";
import { Button, HeroFigurine } from "../components";
import { mediaQuery } from "../styles";
import {
  DarkTextColorClasses,
  GradientTextColorClases,
} from "../styles/globalTwinClasses";

const HeroWrapper = styled.section`
  ${tw`container mx-auto`}
  margin-top: 163px;
  height: calc(100vh - 163px - 6rem);
  max-height: 750px;

  @media ${mediaQuery("md")} {
    ${tw`flex flex-row items-center`}
    height: 80vh;
    margin-top: 80px;
  }

  @media ${mediaQuery("lg")} {
    max-width: 1280px;
  }
`;

const InfoWrapper = styled.div`
  ${tw`flex flex-col h-full pt-5`}

  @media ${mediaQuery("md")} {
    ${tw`grow basis-1/2 h-min`}
  }
`;

const Title = styled.h1`
  ${DarkTextColorClasses}
  ${tw`font-extrabold font-mont mb-6`}
  font-size: 1.75rem;
  line-height: 2.8rem;

  span {
    ${GradientTextColorClases}
  }

  @media ${mediaQuery("md")} {
    ${tw`text-4xl`}
  }
`;

const SubTitle = styled.p`
  ${DarkTextColorClasses}
  ${tw`font-light font-mont text-base`}
  max-width: 350px;

  @media ${mediaQuery("md")} {
    ${tw`text-lg mt-6`}
    max-width: 394px;
  }
`;

const StyledButton = styled(Button)``;

const ButtonWrapper = styled.div`
  ${tw`grow basis-full flex items-center justify-center`}

  @media ${mediaQuery("md")} {
    ${tw`grow-0 basis-0 block mt-14`}
  }
`;

const FigureWrapper = styled.div`
  ${tw`hidden`}

  @media ${mediaQuery("md")} {
    ${tw`block basis-1/2 h-full`}
  }
`;

export const Hero = () => {
  const yearsOfExperience =
    new Date().getFullYear() - new Date("10/01/2019").getFullYear();

  return (
    <HeroWrapper>
      <InfoWrapper>
        <Title>
          Hello <br></br>I’m Félix López <br></br>{" "}
          <span>Full-Stack Developer</span>
        </Title>
        <SubTitle>
          {yearsOfExperience}+ years of experience working in design and
          development of web/mobile projects.
        </SubTitle>
        <ButtonWrapper>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <StyledButton>my works</StyledButton>
          </Link>
        </ButtonWrapper>
      </InfoWrapper>
      <FigureWrapper>
        <HeroFigurine />
      </FigureWrapper>
    </HeroWrapper>
  );
};

export default Hero;
