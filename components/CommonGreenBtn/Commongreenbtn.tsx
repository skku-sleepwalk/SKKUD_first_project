import styles from "./Commongreenbtn.module.css";
import React from "react";
export interface greenbtnProps {
  value: string;
  style: React.CSSProperties;
}
export function Commongreenbtn({ value, style }: greenbtnProps) {
  return (
    <button className={styles.backgroundColor} style={style}>
      {value}
    </button>
  );
}
