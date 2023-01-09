import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Project, SectionTitle } from "../components";

const data: Array<Project> = [
  {
    id: 1,
    title: "moviex",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu semper lacus. Etiam dapibus quis purus et iaculis. Nulla in aliquam ante, non scelerisque velit. Sed mattis augue massa, sed commodoi.",
    stack: ["react", "styled components", "tailwindcss"],
    demo: "",
    sourceCode: "",
    thumbnail: "",
  },
  {
    id: 2,
    title: "coverz",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu semper lacus. Etiam dapibus quis purus et iaculis. Nulla in aliquam ante, non scelerisque velit. Sed mattis augue massa, sed commodoi.",
    stack: ["react", "styled components", "tailwindcss"],
    demo: "",
    sourceCode: "",
    thumbnail: "",
  },
  {
    id: 3,
    title: "repair shop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu semper lacus. Etiam dapibus quis purus et iaculis. Nulla in aliquam ante, non scelerisque velit. Sed mattis augue massa, sed commodoi.",
    stack: ["html", "gulp", "sass", "bem"],
    demo: "",
    sourceCode: "",
    thumbnail: "",
  },
];

const PortfolioWrapper = styled.section`
  ${tw`container`}
`;

export const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <SectionTitle
        title="my works"
        // backgroundTitle="portfolio"
        quote="If I had eight hours to chop down a tree, I’d spend six hours sharpening my axe."
        author="Abraham Lincoln"
      />
      {/* <Projects>
        {data.map((project) => (
          <Project {...project} key={project.id} />
        ))}
      </Projects> */}
    </PortfolioWrapper>
  );
};

export default Portfolio;
