import React, { DetailedHTMLProps } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { mediaQuery } from "../styles";
import {
  DarkBackgroundColorClasses,
  DarkTextColorClasses,
  GradientTextColorClases,
  LightTextColorClasses,
} from "../styles/globalTwinClasses";

const SectionTitleWrapper = styled.div`
  ${tw`flex flex-col mt-24 mb-12 relative`}

  @media ${mediaQuery("md")} {
    ${tw`mt-32 mb-20`}
  }
`;

const StyledSectionTitle = styled.h2`
  ${tw`font-extrabold font-mont text-center`}
  font-size: 1.75rem;
  line-height: 2.5rem;
  ${GradientTextColorClases}

  @media ${mediaQuery("md")} {
    ${tw`text-4xl`}
  }
`;

const SectionQuoteWrapper = styled.div`
  ${tw`inline self-center flex flex-col items-center justify-center`}
`;

const SectionQuote = styled.blockquote`
  ${DarkTextColorClasses}
  ${tw`font-semibold font-mont italic text-center text-sm mt-2 inline`}
  @media ${mediaQuery("md")} {
    ${tw`text-lg`}
  }
`;

const SectionAuthor = styled.span`
  ${DarkTextColorClasses}
  ${tw`font-semibold font-mont text-xs self-end relative mt-1`}
  &::before {
    ${DarkBackgroundColorClasses};
    ${tw`content absolute top-1/2`}
    left: -1.5rem;
    width: 1rem;
    height: 0.06rem;
  }

  @media ${mediaQuery("md")} {
    ${tw`text-sm`}
  }
`;

export const SectionBackgroundTitle = styled.span`
  ${LightTextColorClasses}
  ${tw`font-mont uppercase font-extrabold absolute left-1/2 top-0 w-max bg-gradient-to-b from-dark to-transparent bg-clip-text leading-none dark:from-light opacity-10`}
  
  -webkit-text-stroke: 3px transparent;
  transform: translate(-50%, -30%);
  font-size: 5rem;
  z-index: -1;

  @-moz-document url-prefix() {
    & {
      ${tw`opacity-30`}
    }
  }

  @media ${mediaQuery("md")} {
    font-size: 300px;
  }
`;

interface SectionTitleProps {
  title?: string;
  quote?: string;
  author?: string;
  backgroundTitle?: string;
  children?: React.ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  quote,
  author,
  backgroundTitle,
  children,
}) => {
  return (
    <SectionTitleWrapper>
      {backgroundTitle && (
        <SectionBackgroundTitle>{backgroundTitle}</SectionBackgroundTitle>
      )}
      <StyledSectionTitle>{title || children}</StyledSectionTitle>
      {quote && author && (
        <SectionQuoteWrapper>
          <SectionQuote>{`"${quote}"`}</SectionQuote>
          <SectionAuthor>{author}</SectionAuthor>
        </SectionQuoteWrapper>
      )}
    </SectionTitleWrapper>
  );
};

export default SectionTitle;
