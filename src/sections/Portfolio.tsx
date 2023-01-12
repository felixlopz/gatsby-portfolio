import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Project, ProjectItem, SectionTitle } from "../components";
import { mediaQuery } from "../styles";

import { graphql, useStaticQuery } from "gatsby";

const PortfolioWrapper = styled.section`
  ${tw`container mx-auto`}

  @media ${mediaQuery("lg")} {
    max-width: 1280px;
  }
`;

const Projects = styled.div`
  ${tw`grid grid-cols-1 gap-y-20`}

  @media ${mediaQuery("md")} {
    ${tw`gap-y-32`}
  }
`;

export const Portfolio = () => {
  const { allStrapiProject } = useStaticQuery(graphql`
    query {
      allStrapiProject {
        nodes {
          ...Project
        }
      }
    }
  `);

  const projects: Array<Project> = allStrapiProject.nodes;

  return (
    <PortfolioWrapper id="portfolio">
      <SectionTitle
        title="my works"
        backgroundTitle="portfolio"
        quote="If I had eight hours to chop down a tree, I’d spend six hours sharpening my axe."
        author="Abraham Lincoln"
      />
      <Projects>
        {projects.map((project) => (
          <ProjectItem {...project} key={project.id} />
        ))}
      </Projects>
    </PortfolioWrapper>
  );
};

export const query = graphql`
  fragment Project on STRAPI_PROJECT {
    id
    description
    demo
    sourceCode
    title
    type
    thumbnail {
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
    technologies {
      name
    }
  }
`;

export default Portfolio;
