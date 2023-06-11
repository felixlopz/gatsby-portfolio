import React from "react";
import { IconType } from "react-icons";

interface LinkIconProps {
  href?: string;
  size: number;
  icon: IconType;
  rounded?: boolean;
}

export const LinkIcon: React.FC<LinkIconProps> = ({
  href,
  size = 24,
  icon: Icon,
  rounded,
}) => {
  return (
    <li
      className={`
      transition-colors duration-300 cursor-pointer hover:opacity-50
      ${
        rounded
          ? "text-light dark:text-dark p-2 bg-dark dark:bg-light rounded-full"
          : "text-dark dark:text-light"
      }
    
    `}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon size={size} />
      </a>
    </li>
  );
};

export default LinkIcon;
