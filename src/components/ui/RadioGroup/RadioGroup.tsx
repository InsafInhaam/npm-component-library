import React from "react";
import styles from "./RadioGroup.module.scss";
import { cn } from "../../../utils/cn";

type Option = {
  label: string;
  value: string;
};

type RadioGroupProps = {
  label?: string;
  name: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  className,
}) => {
  return (
    <div className={cn(styles.radioGroup, className)}>
      {label && <p className={styles.groupLabel}>{label}</p>}
      {options.map((option) => (
        <label>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className={styles.radioInput}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};
