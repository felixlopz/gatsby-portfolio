import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.div`
  ${tw`hidden md:block absolute top-3/4`}
  width: 100%;
  max-width: 500px;
  max-height: 459px;
  height: 100%;
  transform: translate(-50%, -65%);
  left: calc((100vw - 1280px) / 2);
`;

const Circle = styled.div`
  ${tw`absolute left-1/2 top-1/2 bg-gradient-to-b from-secondary to-primary`}
  transform: translate(-50%, -50%);
  width: 90%;
  padding-bottom: 90%;
  border-radius: 100%;
`;

const Triangle = styled.div`
  ${tw`absolute bg-gradient-to-b from-light to-[#333435] right-0 top-0`}
  width: 45%;
  height: 55%;
  transform: translate(0, -10%);

  &::before {
    ${tw`content bg-dark absolute`}
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    top: 2px;
    left: 2px;
  }

  &,
  &::before {
    clip-path: polygon(0 0, 13% 100%, 100% 37%);
  }

  @keyframes about-triangle-floating {
    0% {
      transform: translate(0, -10%);
    }
    50% {
      transform: translate(0, calc(-10% - 20px));
    }

    10% {
      transform: translate(0, -10%);
    }
  }

  animation: about-triangle-floating 6s ease-in-out infinite;
`;

const StripeWrapper = styled.div`
  ${tw`absolute right-0 top-1/2`}
  width: 30%;
  padding-top: 22%;
  transform: translate(-10%, 50%) rotate(40deg);

  @keyframes about-stripes-floating {
    0% {
      transform: translate(-10%, 50%) rotate(40deg);
    }
    50% {
      transform: translate(-10%, calc(50% + 10px)) rotate(40deg);
    }

    10% {
      transform: translate(-10%, 50%) rotate(40deg);
    }
  }

  animation: about-stripes-floating 3s ease-in-out infinite;
`;

const Stripe = styled.div`
  ${tw`absolute top-1/2 bg-gradient-to-b from-light to-transparent`}
  width: 100%;
  height: 18%;
  transform: translateY(-50%);

  &:first-child {
    ${tw`top-0 translate-y-0`}
  }

  &:last-child {
    ${tw`bottom-0 translate-y-0`}
    top: unset;
  }

  &::before {
    ${tw`content absolute bg-dark`}
    top: 1px;
    left: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
  }
`;

export const AboutFigurine = () => {
  return (
    <Wrapper>
      <Circle />
      <Triangle />
      <StripeWrapper>
        <Stripe />
        <Stripe />
        <Stripe />
      </StripeWrapper>
    </Wrapper>
  );
};

export default AboutFigurine;
