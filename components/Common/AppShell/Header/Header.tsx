import style from "./Header.module.css";
import { IconMenu2 } from "@tabler/icons-react";

interface HeaderProps {
  isLogin?: boolean;
}

export function movePage(str: string) {
  location.href = str;
}

export function Header({ isLogin }: HeaderProps) {
  return (
    <div className={style.header}>
      <a className={style.leftSide} href="/main">
        <img src="/images/45logo.svg" className={style.img}></img>
      </a>
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
          {/* 마이페이지 버튼 */}
          {isLogin && (
            <button
              className={style.loginButton}
              type="button"
              onClick={() => {
                movePage("/mypage");
              }}
            >
              MY PAGE
            </button>
          )}
        </div>
        {/* 메뉴 버튼 */}
        <button className={style.menuButton}>
          <IconMenu2 className={style.iconMenu} />
        </button>
      </div>
    </div>
  );
}
