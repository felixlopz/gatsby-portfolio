import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { GradientTextColorClases } from "../styles/globalTwinClasses";
import { mediaQuery } from "../styles";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import LinkIcon from "./LinkIcon";
import { FaGithub, FaLink, FaFigma } from "react-icons/fa";

export interface Project {
  type: "development" | "design";
  slug: string;
  title: string;
  description: string;
  technologies?: string;
  thumbnail: any;
  demo: string;
  code?: string;
  position: number;
}

const ThumbnailWrapper = styled.div`
  ${tw`bg-gradient-to-b from-primary to-secondary shadow-md p-0.5 dark:shadow-[#FFFFFF40]`}

  @media ${mediaQuery("md")} {
    ${tw`basis-1/2 grow`}
    max-width: 482px;
  }
`;

const Thumbnail = styled.div`
  ${tw`w-full relative`}
  padding-top: 56.25%;
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  ${tw`w-full h-full top-0 left-0`}

  position: absolute !important;
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
  ${tw`font-extrabold font-mont inline lowercase capitalize`}
  font-size: 1.75rem;
  line-height: 2.5rem;
  ${GradientTextColorClases}
`;

const Description = styled.p`
  ${tw`font-mont font-light text-base text-dark dark:text-light lowercase`}
  @media ${mediaQuery("md")} {
    font-size: 18px;
    line-height: 24px;
  }
`;

const TechnologiesWrapper = styled.div`
  ${tw`flex flex-row flex-wrap gap-x-5 inline mt-4`}
`;

const Technology = styled.p`
  ${tw`font-mont text-dark dark:text-light font-semibold text-lg min-w-fit lowercase`}
`;

const LinksWrapper = styled.ul`
  ${tw`flex gap-x-4 mt-6`}
`;

const Wrapper = styled.div`
  @media ${mediaQuery("md")} {
    ${tw`flex items-start justify-between gap-x-12`}

    &:nth-child(even) {
      ${tw`flex-row-reverse`}
    }
  }
`;

export const ProjectItem: React.FC<Project> = ({
  title,
  type,
  description,
  technologies,
  thumbnail,
  demo,
  code,
}) => {
  const image: IGatsbyImageData | undefined = getImage(thumbnail);

  return (
    <Wrapper>
      <ThumbnailWrapper>
        <a
          aria-label={`${title} demo link`}
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Thumbnail>
            {image != null && (
              <StyledGatsbyImage image={image} alt="thumbnail" />
            )}
          </Thumbnail>
        </a>
      </ThumbnailWrapper>
      <Information>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
        <Description>{description}</Description>
        {technologies && (
          <TechnologiesWrapper>
            {technologies.split("-").map((name) => (
              <Technology>{name}</Technology>
            ))}
          </TechnologiesWrapper>
        )}
        <LinksWrapper>
          {type === "development" ? (
            <>
              <LinkIcon
                label={`${title} sourcecode link`}
                href={code}
                size={20}
                icon={FaGithub}
                rounded
              />
              <LinkIcon
                label={`${title} demo link`}
                href={demo}
                size={20}
                icon={FaLink}
                rounded
              />
            </>
          ) : (
            <LinkIcon
              label={`${title} design link`}
              href={demo}
              size={20}
              icon={FaFigma}
              rounded
            />
          )}
        </LinksWrapper>
      </Information>
    </Wrapper>
  );
};

export default ProjectItem;
