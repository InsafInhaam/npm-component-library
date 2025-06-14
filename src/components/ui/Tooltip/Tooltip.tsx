import React, { useState } from "react";
import styles from "./Tooltip.module.scss";
import { cn } from "../../../utils/cn";

type TooltipProps = {
  text: string;
  children: React.ReactNode;
  className?: string;
};

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  className,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={cn(styles.tooltipWrapper, className)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <div className={styles.tooltip}>{text}</div>}
    </div>
  );
};
