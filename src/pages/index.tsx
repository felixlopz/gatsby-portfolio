import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { LightBackgroundColorClasses } from "../styles/globalTwinClasses";
import tw from "twin.macro";
import { About, Hero } from "../sections";

const Main = styled.main``;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header></Header>
      <Main>
        <Hero></Hero>
        <About></About>
      </Main>
      <Footer></Footer>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Félix López | Software Engineer</title>
);
