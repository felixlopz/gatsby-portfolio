import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { AboutFigurine, Button, SectionTitle } from "../components";
import { mediaQuery } from "../styles";
import useYearsOld from "../hooks/useYearsOld";
import { graphql, useStaticQuery } from "gatsby";

const AboutWrapper = styled.section`
  ${tw`relative`}
  @media ${mediaQuery("md")} {
    margin-top: 200px;
  }
  @media ${mediaQuery("lg")} {
    margin-top: 300px;
  }
`;

const AboutContainer = styled.div`
  ${tw`container mx-auto`}

  @media ${mediaQuery("lg")} {
    max-width: 1280px;
  }
`;

const InformationTabsWrapper = styled.div`
  @media ${mediaQuery("md")} {
    ${tw`mx-auto`}
    max-width: 517px;
  }
`;

const InformationHeader = styled.div`
  ${tw`grid grid-cols-3 gap-x-5 mt-8`}

  @media ${mediaQuery("md")} {
    ${tw`gap-x-8 mb-8`}
  }
`;

const InformationBody = styled.div`
  ${tw`mt-4 flex flex-col items-center`}
  min-height: 500px;
  @media ${mediaQuery("md")} {
    ${tw`mx-auto`}
    min-height: 526px;
    max-width: 412px;
  }
`;

const InformationTab = styled.div`
  ${tw`font-mont text-base text-dark dark:text-light font-light`}

  p {
    ${tw`mt-6`}
  }

  @media ${mediaQuery("md")} {
    font-size: 18px;
    line-height: 26px;
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
    ${tw`font-bold underline`}
  }

  @media ${mediaQuery("md")} {
    li {
      ${tw`mt-8`}
    }
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
  ${tw`font-mont font-bold rounded-tl-3xl rounded-br-3xl text-xs py-2 px-6 bg-light text-dark border-dark transition-[background,color] duration-300 ease-in-out border`};
  ${({ selected }) => selected && tw`bg-dark text-light border-light`}

  @media ${mediaQuery("md")} {
    ${tw`text-lg`}
  }
`;

const enum InformationTabs {
  About = "About",
  Skills = "Skills",
  History = "History",
}

export const About = () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { ext: { eq: ".pdf" } }) {
        nodes {
          publicURL
        }
      }
    }
  `);

  const { publicURL } = allFile.nodes[0];
  console.log(publicURL);

  const [selectedInformationTab, setSelectedInformationTab] =
    useState<InformationTabs>(InformationTabs.Skills);

  const isTabSelected = (tab: InformationTabs) => {
    return tab === selectedInformationTab;
  };

  const selectTab = (tab: InformationTabs) => {
    setSelectedInformationTab(tab);
  };

  const { yearsOld } = useYearsOld();

  return (
    <AboutWrapper id="about">
      <AboutFigurine />
      <AboutContainer>
        <SectionTitle
          title="About me"
          quote="be yourself; everyone else is already taken."
          author="Oscar Wild"
          backgroundTitle="About Me"
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
                  Hello I’m Félix López a {yearsOld} years old creative
                  developer based in Venezuela, I started in web development in
                  the middle of my university career and quickly got hooked in
                  the tech world and started working on my own projects
                  subsequently I started learning mobile development and started
                  working on freelance projects.
                </p>
                <p>
                  My passion is to develop quality websites and applications
                  that are adaptable, powerful, modern in style and visually
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
                      <strong>React</strong> and all the ecosystem associated
                      with the framework such as:{" "}
                      <strong>
                        React Native, Redux, Redux Saga, Redux Toolkit, React
                        Native Web, Nextjs, Graphql, Gatsby, Styled Components,
                        etc.
                      </strong>
                      <br></br>
                      <br></br>
                      However I have also worked on several backend projects
                      developing REST API with technologies such as{" "}
                      <strong>Node, Swagger</strong> and{" "}
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
                      Jun 2021 - Sep 2022 - Carterhaugh LLC - Junior React
                      Developer (upwork contract).
                    </li>

                    <li>
                      Jul 2020 - May 2021 - Fourthwall - Shopify Themes
                      Developer (upwork contract).
                    </li>
                    <li>Oct 2019 - Feb 2020 Freelance</li>
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
            <Button className="text-xs mt-12" color="dark">
              <a href={publicURL} download>
                download curriculum
              </a>
            </Button>
          </InformationBody>
        </InformationTabsWrapper>
      </AboutContainer>
    </AboutWrapper>
  );
};
