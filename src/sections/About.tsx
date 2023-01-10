import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionTitle } from "../components";

const AboutWrapper = styled.section`
  ${tw`container`}
`;

const InformationTabsWrapper = styled.div``;

const InformationHeader = styled.div`
  ${tw`grid grid-cols-3 gap-x-5 mt-8`}
`;

const InformationBody = styled.div`
  ${tw`mt-8`}
`;

const InformationTab = styled.div`
  ${tw`font-mont text-base text-dark dark:text-light font-light`}

  p {
    ${tw`mt-6`}
  }
`;

const AboutMeTab = styled(InformationTab)``;

const SkillsTab = styled(InformationTab)`
  ul {
    ${tw`list-disc pl-4`}
  }

  li {
    ${tw`mt-5`}
  }

  strong {
    ${tw`font-semibold underline`}
  }
`;

const HistoryTab = styled(InformationTab)`
  strong {
    ${tw`font-semibold underline`}
  }

  ul {
    ${tw`list-disc pl-4`}
  }

  li {
    ${tw`mt-5`}
  }
`;

interface StyledTabButtonProps {
  selected: boolean;
}

const StyledTabButton = styled.button<StyledTabButtonProps>`
  ${tw`font-mont font-bold rounded-tl-3xl rounded-br-3xl text-xs py-2 px-6 bg-light text-dark border-dark transition-[background,color] ease-in-out`};
  border-width: 1px;
  ${({ selected }) => selected && tw`bg-dark text-light border-light`}
`;

const enum InformationTabs {
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

  const getYearsOld = (dob: Date) => {
    const diff_ms = Date.now() - dob.getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };

  return (
    <AboutWrapper>
      <SectionTitle
        title="about me"
        quote="be yourself; everyone else is already taken."
        author="Oscar Wild"
        // backgroundTitle="About Me"
      />
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
          {isTabSelected(InformationTabs.About) && (
            <AboutMeTab>
              <p>
                Hello I’m Félix López a {getYearsOld(new Date(1998, 8, 15))}{" "}
                years old creative developer based in Venezuela, I started in
                web development in the middle of my university career and
                quickly got hooked in the tech world and started working on my
                own projects subsequently I started learning mobile development
                and started working on freelance projects.
              </p>
              <p>
                My passion is to develop quality websites and applications that
                are adaptable, powerful, modern in style and visually
                attractive. I'm self-taught, fast learner, and a true believer
                that anything is possible with hard work, dedication, and
                passion.
              </p>
            </AboutMeTab>
          )}
          {isTabSelected(InformationTabs.Skills) && (
            <SkillsTab>
              <ul>
                <li>
                  <p>
                    <strong>Hard Skills:</strong> Throughout my career I have
                    focused more on the frontend and have worked mainly with{" "}
                    <strong>React</strong> and all the ecosystem associated with
                    the framework such as:{" "}
                    <strong>
                      React Native, Redux, Redux-Saga, RNW, Nextjs, Graphql,
                      Gatsby, Styled Components.
                    </strong>
                    <br></br>
                    However I have also worked on several backend projects
                    developing REST API with <strong>Node</strong> and{" "}
                    <strong>Express</strong> using varius databases such as{" "}
                    <strong>PostgreSQL, Mongodb, MySQL and Firebase.</strong>
                  </p>
                </li>
                <li>
                  <strong>Soft Skills:</strong> Adaptability, Time Management
                  and Communication are qualities that I apply when working on
                  any project, that, along with my Creativity has been
                  successful in solving problems.
                </li>
              </ul>
            </SkillsTab>
          )}
          {isTabSelected(InformationTabs.History) && (
            <HistoryTab>
              <p>
                <strong>Work History:</strong>
                <ul>
                  <li>
                    Oct 2019 - Feb 2020 FUNDAUC - Web development fundamentals
                    instructor.
                  </li>
                  <li>
                    Jul 2020 - Jun 2021 - Fourthwall - Shopify Themes Developer
                    (upwork contract)
                  </li>
                  <li>
                    Jun 2021 - Sep 2022 - Carterhaugh LLC - Junior React
                    Developer (upwork contract).
                  </li>
                </ul>
              </p>
              <p>
                <strong>Education:</strong>
                <ul>
                  <li>UCAB - Informatics Engineer - 2023</li>
                </ul>
              </p>
            </HistoryTab>
          )}
        </InformationBody>
      </InformationTabsWrapper>
    </AboutWrapper>
  );
};
