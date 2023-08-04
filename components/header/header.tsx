// 이것의 화면을 보고 싶다면 http://localhost:3000/examplepage 로 들어가세요

import SearchBox from "./headerBox/searchBox";
import SignInBox from "./headerBox/signInBox";
import header from "./header.module.css";
import { IconMenu2 } from "@tabler/icons-react";

export default function index() {
  return (
    <>
      <div className={header.header}>
        <a className={header.leftSide} href="https://google.com">
          <img src="45logo.svg" className={header.img}></img>
        </a>
        <div className={header.rightSide}>
          <SearchBox />
          <SignInBox />
          <button className={header.menuButton}>
            <IconMenu2 className={header.iconMenu} />
          </button>
        </div>
      </div>
      {/* fixed 헤더 구현 후 자리 차지가 없는 문제 해결 용  */}
      <div className={header.emptyBox}></div>
    </>
  );
}
