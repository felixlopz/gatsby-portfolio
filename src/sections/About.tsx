import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../components";
import {
  DarkBackgroundColorClasses,
  DarkTextColorClasses,
  GradientTextColorClases,
  LightTextColorClasses,
} from "../styles/globalTwinClasses";

const SectionTitle = styled.h2`
  ${tw`font-extrabold font-mont text-center`}
  font-size: 1.75rem;
  line-height: 2.5rem;
  ${GradientTextColorClases}
`;

const SectionQuote = styled.blockquote`
  ${DarkTextColorClasses}
  ${tw`font-semibold font-mont italic text-center text-base`}
`;

const SectionAuthor = styled.span`
  ${DarkTextColorClasses}
  ${tw`font-semibold font-mont text-xs self-end relative`}
  
  &::before {
    ${DarkBackgroundColorClasses};
    ${tw`content absolute top-1/2`}
    left: -1.5rem;
    width: 1rem;
    height: 0.06rem;
  }
`;

const SectionBackgroundTitle = styled.span`
  ${tw`font-mont uppercase font-extrabold absolute block left-1/2 top-0 z-0 opacity-90 w-max`}
  background: linear-gradient(180deg, #fafaf7, rgba(250, 250, 247, 0));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-stroke: 1px transparent;
  ${LightTextColorClasses};
  transform: translate(-50%, -30%);
  line-height: 1;
  font-size: 5rem;
`;

const SectionTitleWrapper = styled.div`
  ${tw`flex flex-col relative mt-12`}
`;

const AboutWrapper = styled.section`
  ${tw`container`}
`;

const InformationTabsWrapper = styled.div``;

const InformationHeader = styled.div`
  ${tw`grid grid-cols-3 gap-x-5`}
`;

const InformationBody = styled.div``;

const AboutMeTab = styled.div``;

const SkillsTab = styled.div``;

const HistoryTab = styled.div``;

const StyledTabButton = styled(Button)<{ selected: boolean }>`
  ${tw`text-xs border-dark dark:border-light bg-none text-dark dark:text-light`}
  border-width: 1px;
  ${({ selected }) =>
    selected && tw`bg-dark dark:bg-light text-light dark:text-dark`}
`;

enum InformationTabs {
  About = "About",
  Skills = "Skills",
  History = "History",
}

export const About = () => {
  const [selectedInformationTab, setSelectedInformationTab] =
    useState<InformationTabs>(InformationTabs.Skills);

  const isTabSelected = (tab: InformationTabs) => {
    return tab === selectedInformationTab;
  };

  const selectTab = (tab: InformationTabs) => {
    setSelectedInformationTab(tab);
  };

  return (
    <AboutWrapper>
      <SectionTitleWrapper>
        {/* <SectionBackgroundTitle>About Me</SectionBackgroundTitle> */}
        <SectionTitle>me, myself and I</SectionTitle>
        <SectionQuote>"Be yourself; everyone is already taken."</SectionQuote>
        <SectionAuthor>Oscar Wild</SectionAuthor>
      </SectionTitleWrapper>
      <InformationTabsWrapper>
        <InformationHeader>
          <StyledTabButton
            selected={isTabSelected(InformationTabs.About)}
            onClick={() => {
              selectTab(InformationTabs.About);
            }}
          >
            about
          </StyledTabButton>
          <StyledTabButton
            selected={isTabSelected(InformationTabs.Skills)}
            onClick={() => selectTab(InformationTabs.Skills)}
          >
            skills
          </StyledTabButton>
          <StyledTabButton
            selected={isTabSelected(InformationTabs.History)}
            onClick={() => selectTab(InformationTabs.History)}
          >
            history
          </StyledTabButton>
        </InformationHeader>
        <InformationBody>
          <AboutMeTab></AboutMeTab>
          <SkillsTab></SkillsTab>
          <HistoryTab></HistoryTab>
        </InformationBody>
      </InformationTabsWrapper>
    </AboutWrapper>
  );
};
