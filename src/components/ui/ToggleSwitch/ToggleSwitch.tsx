import React from "react";
import styles from "./ToggleSwitch.module.scss";
import { cn } from "../../../utils/cn";

type ToggleSwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
};

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  label,
  disabled,
  className,
}) => {
  return (
    <label className={cn(styles.switchWrapper, className)}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={cn(styles.switch, disabled && styles.disabled)}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        <span className={styles.slider}></span>
      </div>
    </label>
  );
};
