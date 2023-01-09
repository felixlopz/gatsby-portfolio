import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  DarkBackgroundColorClasses,
  DarkTextColorClasses,
  GradientTextColorClases,
  LightTextColorClasses,
} from "../styles/globalTwinClasses";

const StyledSectionTitle = styled.h2`
  ${tw`font-extrabold font-mont text-center`}
  font-size: 1.75rem;
  line-height: 2.5rem;
  ${GradientTextColorClases}
`;

const SectionQuote = styled.blockquote`
  ${DarkTextColorClasses}
  ${tw`font-semibold font-mont italic text-center text-sm mt-2`}
`;

const SectionAuthor = styled.span`
  ${DarkTextColorClasses}
  ${tw`font-semibold font-mont text-xs self-end relative mt-1`}
  z-index: -1;
  &::before {
    ${DarkBackgroundColorClasses};
    ${tw`content absolute top-1/2`}
    left: -1.5rem;
    width: 1rem;
    height: 0.06rem;
  }
`;

const SectionBackgroundTitle = styled.span`
  ${tw`font-mont uppercase font-extrabold absolute block left-1/2 top-0 z-0 opacity-10 w-max`}
  background: linear-gradient(180deg, #fafaf7, rgba(250, 250, 247, 0));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-stroke: 1px transparent;
  ${LightTextColorClasses};
  transform: translate(-50%, -30%);
  line-height: 1;
  font-size: 5rem;
  z-index: -1;
`;

const SectionTitleWrapper = styled.div`
  ${tw`flex flex-col mt-12 relative`}
  z-index: -1;
`;

interface SectionTitleProps {
  title?: string;
  quote?: string;
  author?: string;
  backgroundTitle?: string;
  children?: React.ReactNode;
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
        <>
          <SectionQuote>{`"${quote}"`}</SectionQuote>
          <SectionAuthor>{author}</SectionAuthor>
        </>
      )}
    </SectionTitleWrapper>
  );
};

export default SectionTitle;
