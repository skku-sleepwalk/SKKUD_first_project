import styles from "./main.module.css";
import { Commongreenbtn } from "@/components/commongreenbtn";
export default function main() {
  return (
    <div className={styles.backgroundColor}>
      <style jsx global>
        {`
          body {
            margin: 0px;
            padding: 0px;
          }
        `}
      </style>
      <Commongreenbtn value="hi"></Commongreenbtn>
    </div>
  );
}
