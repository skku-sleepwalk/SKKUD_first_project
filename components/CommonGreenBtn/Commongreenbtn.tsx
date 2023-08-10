import styles from "./Commongreenbtn.module.css";
import React from "react";

export interface greenbtnProps {
  onClick?: () => void;
  value: string;
  style: React.CSSProperties;
}
export function Commongreenbtn({ onClick, value, style }: greenbtnProps) {
  return (
    <button className={styles.backgroundColor} onClick={onClick} style={style}>
      {value}
    </button>
  );
}
