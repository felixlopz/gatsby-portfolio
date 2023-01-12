import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFigma } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { GradientTextColorClases } from "../styles/globalTwinClasses";
import { mediaQuery } from "../styles";

export interface Project {
  type: "development" | "design";
  id: number;
  title: string;
  description: string;
  technologies?: Array<string>;
  thumbnail: string;
  demo: string;
  sourceCode?: string;
}

const ThumbnailWrapper = styled.div`
  ${tw``}

  @media ${mediaQuery("md")} {
    ${tw`basis-1/2 grow`}
    max-width: 482px;
  }
`;

const Thumbnail = styled.div`
  ${tw`w-full h-0`}
  padding-top: 56.25%;
  background: pink;
`;

const Information = styled.div`
  ${tw`mt-6`}
  @media ${mediaQuery("md")} {
    ${tw`basis-1/2 mt-0`}
  }
`;

const TitleWrapper = styled.div`
  ${tw`mb-1 flex items-center justify-between`}

  @media ${mediaQuery("md")} {
  }
`;

const Title = styled.h3`
  ${tw`font-extrabold font-mont inline lowercase`}
  font-size: 1.75rem;
  line-height: 2.5rem;
  ${GradientTextColorClases}
`;

const Description = styled.p`
  ${tw`font-mont font-light text-base text-dark dark:text-light lowercase`}
`;

const TechnologiesWrapper = styled.div`
  ${tw`flex flex-row flex-wrap gap-x-5 inline mt-4`}
`;

const Technology = styled.p`
  ${tw`font-mont text-dark dark:text-light font-semibold text-lg min-w-fit lowercase`}
`;

const LinksWrapper = styled.div`
  ${tw`flex gap-x-4 mt-6`}

  a {
    ${tw`hover:opacity-50 transition-[opacity]`}
  }
`;

const StyledFontAwesome = styled(FontAwesomeIcon)`
  ${tw`text-light dark:text-dark p-2 bg-dark dark:bg-light rounded-full`}
  width: 20px;
  height: 20px;
`;

const Wrapper = styled.div`
  ${tw``}
  @media ${mediaQuery("md")} {
    ${tw`flex items-start gap-x-12`}

    &:nth-child(even) {
      ${tw`flex-row-reverse`}
    }

    &:nth-child(odd) {
      ${Information} {
        ${tw`flex flex-col justify-end items-end`}
      }

      ${Description} {
        ${tw`text-right`}
      }
    }
  }
`;

export const ProjectItem: React.FC<Project> = ({
  title,
  id,
  type,
  description,
  technologies,
  thumbnail,
  demo,
  sourceCode,
}) => {
  return (
    <Wrapper>
      <ThumbnailWrapper>
        <a href={demo} target="_blank" rel="noopener noreferrer">
          <Thumbnail></Thumbnail>
        </a>
      </ThumbnailWrapper>
      <Information>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
        <Description>{description}</Description>
        {technologies && (
          <TechnologiesWrapper>
            {technologies.map((tech) => (
              <Technology>{tech}</Technology>
            ))}
          </TechnologiesWrapper>
        )}
        <LinksWrapper>
          {type === "development" ? (
            <>
              <a href={sourceCode} target="_blank" rel="noopener noreferrer">
                <StyledFontAwesome icon={faGithub} />
              </a>
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <StyledFontAwesome icon={faLink} />
              </a>
            </>
          ) : (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <StyledFontAwesome icon={faFigma} />
            </a>
          )}
        </LinksWrapper>
      </Information>
    </Wrapper>
  );
};

export default ProjectItem;
