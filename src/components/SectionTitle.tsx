import React, { DetailedHTMLProps } from "react";
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
  ${LightTextColorClasses}
  ${tw`font-mont uppercase font-extrabold absolute left-1/2 top-0 opacity-10 w-max bg-gradient-to-b from-light to-transparent bg-clip-text leading-none`}

  transform: translate(-50%, -30%);
  font-size: 5rem;
  z-index: -1;
`;

const SectionTitleWrapper = styled.div`
  ${tw`flex flex-col mt-24 mb-12 relative`}
  z-index: -1;
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
        <>
          <SectionQuote>{`"${quote}"`}</SectionQuote>
          <SectionAuthor>{author}</SectionAuthor>
        </>
      )}
    </SectionTitleWrapper>
  );
};

export default SectionTitle;
