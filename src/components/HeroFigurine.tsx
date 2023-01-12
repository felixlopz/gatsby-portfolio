import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.div`
  ${tw`relative w-full flex mt-12`}
  max-width: 630px;
  padding-top: 100%;
  z-index: -1;
`;

const Circle = styled.div`
  ${tw`absolute left-1/2 top-1/2 bg-gradient-to-b from-secondary to-primary`}
  transform: translate(-50%, -50%);
  width: 54%;
  padding-bottom: 54%;
  border-radius: 100%;
`;

const InnerCircle = styled.div`
  ${tw`absolute left-1/2 top-1/2 bg-dark outline-1 outline-light outline outline`}
  transform: translate(-50%, -50%);
  width: 6%;
  padding-bottom: 6%;
  border-radius: 100%;
`;

const Triangle = styled.div`
  ${tw`bg-gradient-to-r from-light to-[#333435] relative`}
  width: 45%;
  height: 55%;

  &::before {
    ${tw`content bg-dark`}
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    position: absolute;
    top: 2px;
    left: 2px;
  }
`;

const LeftTriangle = styled(Triangle)`
  ${tw`absolute left-0 top-1/2`}
  transform: translate(-10%, -10%);

  &,
  &::before {
    clip-path: polygon(100% 0, 0 37%, 85% 100%);
  }
`;

const RightTriangle = styled(Triangle)`
  ${tw`absolute right-0 top-0`}
  transform: translate(5%, 5%);

  &,
  &::before {
    clip-path: polygon(100% 33%, 0 0, 16% 100%);
  }
`;

export const HeroFigurine = () => {
  return (
    <Wrapper>
      <Circle />
      <InnerCircle />
      <LeftTriangle />
      <RightTriangle />
    </Wrapper>
  );
};

export default HeroFigurine;
