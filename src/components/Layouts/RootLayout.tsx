import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

const Main = styled.main`
  overflow-x: hidden;
`;

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default RootLayout;
