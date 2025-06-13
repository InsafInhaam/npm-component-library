"use client";

import React from "react";
import styles from "./Select.module.scss";
import { cn } from "../../../utils/cn";

type Option = {
  value: string | number;
  label: string;
};

type SelectProps = {
  label?: string;
  options: Option[];
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  className?: string;
};

export const Select = ({
  label,
  options,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  error,
  className,
}) => {
  return (
    <div className={cn(styles.selectWrapper, className)}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <select
        className={cn(styles.select, error && styles.errorBorder)}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className={styles.errorText}>{error}</div>}
    </div>
  );
};
