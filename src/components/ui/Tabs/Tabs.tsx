"use client";

import React, { useState } from "react";
import styles from "./Tabs.module.scss";
import { cn } from "../../../utils/cn";

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  className?: string;
};

export const Tabs: React.FC<TabsProps> = ({ tabs, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cn(styles.tabs, className)}>
      <div className={styles.tabList}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={cn(styles.tab, i === activeIndex && styles.active)}
            onClick={() => setActiveIndex(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>{tabs[activeIndex].content}</div>
    </div>
  );
};
