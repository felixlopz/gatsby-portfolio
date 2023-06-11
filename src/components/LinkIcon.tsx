import React, { useMemo } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { DarkTextColorClasses } from "../styles";
import { IconType } from "react-icons";

interface LinkIconProps {
  href?: string;
  size: number;
  icon: IconType;
  rounded?: boolean;
}

const Wrapper = styled.li`
  ${DarkTextColorClasses}
  ${tw`hover:opacity-50 transition-[opacity] cursor-pointer`}
`;

export const LinkIcon: React.FC<LinkIconProps> = ({
  href,
  size = 24,
  icon: Icon,
  rounded,
}) => {
  const roundedClasses = useMemo((): string => {
    return rounded
      ? "text-light dark:text-dark p-2 bg-dark dark:bg-light rounded-full"
      : "";
  }, [rounded]);

  return (
    <Wrapper className={roundedClasses}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon size={size} />
      </a>
    </Wrapper>
  );
};

export default LinkIcon;
