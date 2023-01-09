import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

export interface Project {
  id: number;
  title: string;
  description: string;
  stack: Array<string>; // TODO: rename stack to technologies
  thumbnail: string;
  demo: string;
  sourceCode: string;
}

const Wrapper = styled.div``;

const Picture = styled.div``;

const Information = styled.div``;

const Title = styled.h3``;

const Description = styled.p``;

const StackWrapper = styled.div``;

const StackItem = styled.p``;

const ButtonsWrapper = styled.div``;

export const ProjectItem: React.FC<Project> = ({
  title,
  id,
  description,
  stack,
  thumbnail,
  demo,
  sourceCode,
}) => {
  return (
    <Wrapper>
      <Picture></Picture>
      <Information>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <StackItem>
          {stack.map((stack) => (
            <StackItem>{stack}</StackItem>
          ))}
        </StackItem>
      </Information>
    </Wrapper>
  );
};

export default ProjectItem;
