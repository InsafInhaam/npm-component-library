"use client";

import React from "react";
import styles from "./Input.module.scss";
import { cn } from "../../../utils/cn";

type InputProps = {
  label?: string;
  type?: "text" | "email" | "password" | "number";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
};

export const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled,
  required,
  error,
  iconLeft,
  iconRight,
  className,
}) => {
  return (
    <div className={cn(styles.inputWrapper, className)}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={cn(styles.inputContainer, error && styles.errorBorder)}>
        {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
        <input
          className={styles.input}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
        />
        {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};
