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
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              code
              demo
              description
              slug
              technologies
              title
              type
              image {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  `);

  const projects: Array<Project> = allMarkdownRemark.edges.map((node: any) => ({
    ...node.node.frontmatter,
    thumbnail: node.node.frontmatter.image,
  }));

  return (
    <PortfolioWrapper id="portfolio">
      <SectionTitle
        title="My works"
        backgroundTitle="portfolio"
        quote="If I had eight hours to chop down a tree, I’d spend six hours sharpening my axe."
        author="Abraham Lincoln"
      />
      <Projects>
        {projects.map((project) => {
          return <ProjectItem key={project.slug} {...project} />;
        })}
      </Projects>
    </PortfolioWrapper>
  );
};

export default Portfolio;
