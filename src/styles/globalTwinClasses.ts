import tw from "twin.macro";
import { css } from "styled-components";

export const TransitionColorsClasses = `transition-colors duration-300`;

export const LightBackgroundColorClasses = css`
  ${tw`bg-light dark:bg-dark ${TransitionColorsClasses}`}
`;

export const DarkBackgroundColorClasses = css`
  ${tw`bg-dark dark:bg-light ${TransitionColorsClasses}`}
`;

export const LightTextColorClasses = css`
  ${tw`text-light dark:text-dark ${TransitionColorsClasses}`}
`;

export const DarkTextColorClasses = css`
  ${tw`text-dark dark:text-light ${TransitionColorsClasses}`}
`;

export const GradientTextColorClases = css`
  ${tw`text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary`}
`;
