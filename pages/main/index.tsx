import { HamburgerBtn } from "@/components/HamburgerBtn/HamburgerBtn";
import styles from "./index.module.css";
import { Commongreenbtn } from "@/components/CommonGreenBtn/Commongreenbtn";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { useRouter } from "next/router";

export default function main() {
  const router = useRouter();
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
      <div>
        <HamburgerBtn></HamburgerBtn>
        <Commongreenbtn
          value="로그인"
          style={{
            float: "right",
            marginRight: "20px",
          }}
          onClick={() => router.replace("/login")}
        ></Commongreenbtn>
        <div>
          <h1 className={styles.h1}>4.5</h1>
        </div>

        <SearchBar></SearchBar>
        <Commongreenbtn
          value="방 만들기"
          style={{ marginTop: "2%", marginLeft: "65%" }}
          onClick={() => router.replace("/makeRoom")}
        ></Commongreenbtn>
      </div>
    </div>
  );
}
