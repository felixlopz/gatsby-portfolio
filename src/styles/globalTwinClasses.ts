import tw from "twin.macro";
import { css } from "styled-components";

export const LightBackgroundColorClasses = css`
  ${tw`bg-light dark:bg-dark`}
`;

export const DarkBackgroundColorClasses = css`
  ${tw`bg-dark dark:bg-light`}
`;

export const LightTextColorClasses = css`
  ${tw`text-light dark:text-dark`}
`;

export const DarkTextColorClasses = css`
  ${tw`text-dark dark:text-light`}
`;

export const GradientTextColorClases = css`
  ${tw`text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary`}
`;
