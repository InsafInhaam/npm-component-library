"use client";

import React from "react";
import styles from "./Pagination.module.scss";
import clsx from "clsx";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={clsx(styles.pageButton, {
            [styles.active]: i === currentPage,
          })}
          onClick={() => handleClick(i)}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.navButton}
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Prev
      </button>
      {renderPageNumbers()}
      <button
        className={styles.navButton}
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next →
      </button>
    </div>
  );
};
