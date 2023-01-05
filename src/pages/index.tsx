import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { setDarkMode, setLightMode } from "../darkMode";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { LightBackgroundColorClasses } from "../styles/globalTwinClasses";
import tw from "twin.macro";

const Main = styled.main`
  ${LightBackgroundColorClasses}
  ${tw`w-full h-screen`}
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Félix López | Software Engineer</title>
);
