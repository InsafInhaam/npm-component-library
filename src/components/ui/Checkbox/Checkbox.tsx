import React from "react";
import styles from "./Checkbox.module.scss";
import { cn } from "../../../utils/cn";

type CheckboxProps = {
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  indeterminate?: boolean;
  className?: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  disabled = false,
  indeterminate = false,
  className,
}) => {
  const checkboxRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label className={cn(styles.checkboxLabel, className)}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        ref={checkboxRef}
      />
      {label && <span className={styles.labelText}>{label}</span>}
    </label>
  );
};
