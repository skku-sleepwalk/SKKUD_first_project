import { ActionButton } from "../../ActionButton/ActionButton";
import { UnstylesButton } from "../../UnstyledButton/UnstyledButton";
import style from "./Header.module.css";
import { IconMenu2 } from "@tabler/icons-react";

interface HeaderProps {
  onOpen?: () => void;
  isLogin?: boolean;
}

export function movePage(str: string) {
  location.href = str;
}

export function Header({ onOpen, isLogin }: HeaderProps) {
  return (
    <div className={style.header}>
      <div className={style.leftSide}>
        <UnstylesButton onClick={() => movePage("/main")}>
          <img src="/images/45logo.svg" className={style.img} />
        </UnstylesButton>
      </div>
      <div className={style.rightSide}>
        {/* 검색 박스 */}
        <div className={style.searchBox}>
          <input
            type="text"
            placeholder="SEARCH"
            className={style.searchInput}
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
                movePage("/login");
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
                movePage("/mypage");
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
