import React from "react";
import styles from "./DatePicker.module.scss";
import { cn } from "../../../utils/cn";

type DatePickerProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  withTime?: boolean;
  className?: string;
};

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  withTime,
  className,
}) => {
  return (
    <div className={cn(styles.datePicker, className)}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={withTime ? "datetime-local" : "date"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
      />
    </div>
  );
};
