"use client";
import React, { useState } from "react";
import styles from "./Tabs.module.scss";

export const Tabs = ({
  tabs,
}: {
  tabs: { label: string; content: React.ReactNode }[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabList}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={i === activeIndex ? styles.active : styles.tab}
            onClick={() => setActiveIndex(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};
