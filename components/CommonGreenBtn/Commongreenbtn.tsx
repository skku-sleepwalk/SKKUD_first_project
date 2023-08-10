import styles from "./Commongreenbtn.module.css";
import React from "react";

export interface greenbtnProps {
  value: string;
  style: React.CSSProperties;
  link?: string;
}
export function Commongreenbtn({ value, style, link }: greenbtnProps) {
  if (link) {
    return (
      <a href={link}>
        <button className={styles.backgroundColor} style={style}>
          {value}
        </button>
      </a>
    );
  }

  return (
    <button className={styles.backgroundColor} style={style}>
      {value}
    </button>
  );
}
