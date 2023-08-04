// 이것의 화면을 보고 싶다면 http://localhost:3000/examplepage 로 들어가세요

import SearchBox from "./headerBox/searchBox";
import SignInBox from "./headerBox/signInBox";
import header from "./header.module.css";

export default function index() {
  return (
    <div className={header.header}>
      <a className={header.leftSide} href="https://google.com">
        <img src="45logo.svg" className={header.img}></img>
      </a>
      <div className={header.rightSide}>
        <SearchBox />
        <SignInBox />
      </div>
    </div>
  );
}
