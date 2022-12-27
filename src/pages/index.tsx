import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "styled-components";
import tw from "twin.macro";

const Title = styled.h1`
  ${tw`text-3xl font-bold underline`}
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="container">
      <Title>Hello this is my gatsby portfolio</Title>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
