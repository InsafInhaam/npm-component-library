"use client";

import React from "react";
import styles from "./Breadcrumb.module.scss";
import { cn } from "../../../utils/cn";

type BreadcrumbItem = {
  label: string;
  href?: string; // optional, undefined for current page
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = "/",
  className,
}) => {
  return (
    <nav className={cn(styles.breadcrumb, className)} aria-label="breadcrumb">
      <ol className={styles.breadcrumbList}>
        {items.map((item, index) => (
          <li key={index} className={styles.breadcrumbItem}>
            {item.href ? (
              <a href={item.href} className={styles.link}>
                {item.label}
              </a>
            ) : (
              <span className={styles.current}>{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className={styles.separator}>{separator}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
