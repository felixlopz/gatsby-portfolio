import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionTitle } from "../components";

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
    </PortfolioWrapper>
  );
};

export default Portfolio;
