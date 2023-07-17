import styles from "./Commongreenbtn.module.css";

export interface greenbtnProps {
  value: string;
}
export function Commongreenbtn({ value }: greenbtnProps) {
  return <button className={styles.backgroundColor}>{value}</button>;
}
