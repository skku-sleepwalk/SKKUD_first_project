import { useState } from "react";
import styles from "./SearchBar.module.css";
import { useRouter } from "next/router";
export function SearchBar() {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");

  // 엔터 키 누를 시 submit 발생
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 기본 엔터 키 동작 막기
      setKeyword("");
      keyword === ""
        ? router.replace(`/study`)
        : router.replace(`/study?search=${keyword}`);
    }
  };

  return (
    <div className={styles.search} style={{ marginLeft: "25%" }}>
      <img
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
        width="20"
        height="20"
        style={{ position: "absolute", marginTop: "15px", marginLeft: "15px" }}
      ></img>
      <input
        type="text"
        id={styles.Search}
        placeholder="검색"
        value={keyword}
        onChange={(e) => setKeyword(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
