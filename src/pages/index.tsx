import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header, Footer } from "../components";
import styled from "styled-components";
import { About, Contact, Hero, Portfolio } from "../sections";

const Main = styled.main`
  overflow-x: hidden;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </Main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Félix López | Front-End Developer</title>
);
