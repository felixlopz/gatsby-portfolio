import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  color?: keyof typeof colorClassNames;
};

const baseClassNames = `text-base font-mont font-bold rounded-tl-3xl rounded-br-3xl py-3 px-8`;

const colorClassNames = {
  primary: `bg-gradient-to-r from-primary to-secondary text-light`,
  dark: `bg-dark dark:bg-light text-light dark:text-dark`,
  light: `bg-light dark:bg-dark text-dark dark:text-light`,
};

export const Button: React.FC<ButtonProps> = ({
  color = "primary",
  className,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${baseClassNames} ${colorClassNames[color]} ${className}`}
      color={color}
    >
      {children}
    </button>
  );
};

export default Button;
