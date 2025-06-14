import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

type ButtonProps = {
  label?: string;
  onClick?: () => void;
  variant?: "default" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "default",
  size = "md",
  startIcon,
  endIcon,
  className,
  type = "button",
}) => {
  const buttonClasses = classNames(
    styles.button,
    styles[variant],
    styles[size],
    className
  );

  return (
    <button className={buttonClasses} onClick={onClick} type={type}>
      {startIcon && <span>{startIcon}</span>}
      {label}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};
