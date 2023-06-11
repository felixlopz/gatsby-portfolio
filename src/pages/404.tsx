import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";

import styled from "styled-components";
import tw from "twin.macro";
import { Footer, HeroFigurine } from "../components";
import { DarkTextColorClasses } from "../styles";

const Layout = styled.div`
  ${tw`h-screen flex flex-col`}
`;

const Wrapper = styled.main`
  ${tw`basis-full flex items-center`}
`;

const Container = styled.div`
  ${tw`w-full mx-auto flex flex-row justify-between items-center`}
  max-width: 50%;
`;

const FigurineWrapper = styled.div`
  ${tw`basis-full`}
  max-width: 630px;
`;

const Information = styled.div`
  ${tw`text-center`}
`;

const NotFoundText = styled.h1`
  ${DarkTextColorClasses}
  ${tw`text-9xl font-mont font-extrabold`}
`;

const StyledLink = styled(Link)`
  ${DarkTextColorClasses}
  ${tw`font-mont`}
`;

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Wrapper>
        <Container>
          <Information>
            <NotFoundText>404</NotFoundText>
            <StyledLink to="/">Go To Homepage</StyledLink>.
          </Information>
          <FigurineWrapper>
            <HeroFigurine />
          </FigurineWrapper>
        </Container>
      </Wrapper>
      <Footer />
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Félix López | Not Found</title>;
