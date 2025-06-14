"use client";

import React from "react";
import styles from "./Modal.module.scss";
import { cn } from "../../../utils/cn";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;

  return (
    <div className={cn(styles.overlay)} onClick={onClose}>
      <div className={cn(styles.modal, className)} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
