import { HamburgerBtn } from "@/components/HamburgerBtn/HamburgerBtn";
import styles from "./main.module.css";
import { Commongreenbtn } from "@/components/CommonGreenBtn/Commongreenbtn";
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
      <div className={styles.makeroom}>
        <HamburgerBtn></HamburgerBtn>
        <Commongreenbtn value="방 만들기"></Commongreenbtn>
      </div>
    </div>
  );
}
