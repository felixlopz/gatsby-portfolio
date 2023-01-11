import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Project, ProjectItem, SectionTitle } from "../components";
import { mediaQuery } from "../styles";

const data: Array<Project> = [
  {
    id: 1,
    title: "moviex",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu semper lacus. Etiam dapibus quis purus et iaculis. Nulla in aliquam ante, non scelerisque velit. Sed mattis augue massa, sed commodoi.",
    technologies: ["react", "styled components", "tailwindcss"],
    demo: "",
    sourceCode: "",
    thumbnail: "",
    type: "development",
  },
  {
    type: "development",
    id: 2,
    title: "coverz",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu semper lacus. Etiam dapibus quis purus et iaculis. Nulla in aliquam ante, non scelerisque velit. Sed mattis augue massa, sed commodoi.",
    technologies: [
      "react",
      "styled components",
      "tailwindcss",
      "gatsby",
      "twin macro",
    ],
    demo: "",
    sourceCode: "",
    thumbnail: "",
  },
  {
    type: "development",
    id: 3,
    title: "repair shop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu semper lacus. Etiam dapibus quis purus et iaculis. Nulla in aliquam ante, non scelerisque velit. Sed mattis augue massa, sed commodoi.",
    technologies: ["html", "gulp", "sass", "bem"],
    demo: "",
    sourceCode: "",
    thumbnail: "",
  },
  {
    type: "design",
    id: 4,
    title: "Virtual Public",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu semper lacus. Etiam dapibus quis purus et iaculis. Nulla in aliquam ante, non scelerisque velit. Sed mattis augue massa, sed commodoi.",
    demo: "",
    thumbnail: "",
  },
];

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
  return (
    <PortfolioWrapper>
      <SectionTitle
        title="my works"
        backgroundTitle="portfolio"
        quote="If I had eight hours to chop down a tree, I’d spend six hours sharpening my axe."
        author="Abraham Lincoln"
      />
      <Projects>
        {data.map((project) => (
          <ProjectItem {...project} key={project.id} />
        ))}
      </Projects>
    </PortfolioWrapper>
  );
};

export default Portfolio;
