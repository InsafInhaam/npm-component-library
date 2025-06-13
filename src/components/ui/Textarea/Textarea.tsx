"use client";

import React from "react";
import styles from "./Textarea.module.scss";
import { cn } from "../../../utils/cn";

type TextareaProps = {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  rows?: number;
  className?: string;
  maxLength?: number;
};

export const Textarea: React.FC<TextareaProps> = ({
  label,
  value,
  onChange,
  placeholder,
  disabled,
  required,
  error,
  rows = 4,
  className,
  maxLength,
}) => {
  return (
    <div className={cn(styles.textareaWrapper, className)}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <textarea
        className={cn(styles.textarea, error && styles.errorBorder)}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        rows={rows}
        maxLength={maxLength}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};
