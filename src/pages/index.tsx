import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { About, Contact, Hero, Portfolio } from "../sections";
import RootLayout from "../components/Layouts/RootLayout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <RootLayout>
      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </RootLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Félix López | Front-End Developer</title>
);
