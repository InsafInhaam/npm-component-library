"use client";

import React, { useRef } from "react";
import styles from "./FileUpload.module.scss";
import { cn } from "../../../utils/cn";

type FileUploadProps = {
  label?: string;
  onChange: (file: FileList) => void;
  multiple?: boolean;
  accept?: string;
  className?: string;
};

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  onChange,
  multiple = false,
  accept,
  className,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    inputRef?.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onChange(e.target.files);
    }
  };

  return (
    <div className={cn(styles.uploadContainer, className)}>
      {label && <p className={styles.label}>{label}</p>}
      <button
        type="button"
        className={styles.button}
        onClick={handleButtonClick}
      >
        Upload File
      </button>
      <input
        ref={inputRef}
        type="file"
        hidden
        multiple={multiple}
        accept={accept}
        onChange={handleChange}
      />
    </div>
  );
};
