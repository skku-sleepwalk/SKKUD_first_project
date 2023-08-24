import { ActionButton } from "../../ActionButton/ActionButton";
import { UnstylesButton } from "../../UnstyledButton/UnstyledButton";
import style from "./Header.module.css";
import { IconMenu2 } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useState } from "react";

interface HeaderProps {
  onOpen?: () => void;
  isLogin?: boolean;
}

export function Header({ onOpen, isLogin }: HeaderProps) {
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
    <div className={style.header}>
      <div className={style.leftSide}>
        <UnstylesButton onClick={() => router.replace("/main")}>
          <img src="/images/45logo.svg" className={style.img} />
        </UnstylesButton>
      </div>
      <div className={style.rightSide}>
        {/* 검색 박스 */}
        <div className={style.searchBox}>
          <input
            className={style.searchInput}
            type="text"
            placeholder="SEARCH"
            value={keyword}
            onChange={(e) => setKeyword(e.currentTarget.value)}
            onKeyDown={handleKeyDown}
          ></input>
        </div>
        {/* 로그인/마이페이지 버튼 */}
        <div className={style.loginBox}>
          {/* 로그인 버튼 */}
          {!isLogin && (
            <button
              className={style.loginButton}
              type="button"
              onClick={() => {
                router.replace("/login");
              }}
            >
              LOGIN
            </button>
          )}
          {/* 로그 아웃 버튼 */}
          {isLogin && (
            <button
              className={style.loginButton}
              type="button"
              onClick={() => {
                router.replace("/mypage");
              }}
            >
              LOG OUT
            </button>
          )}
        </div>
        {/* 아래도 데모에서는 제외 */}
        {/* 메뉴 버튼 */}
        {/* <ActionButton className={style.menuButton} onClick={onOpen}>
          <IconMenu2 className={style.iconMenu} />
        </ActionButton> */}
      </div>
    </div>
  );
}
