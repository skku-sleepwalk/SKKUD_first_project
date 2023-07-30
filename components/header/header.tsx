// 이것의 화면을 보고 싶다면 http://localhost:3000/examplepage 로 들어가세요

import Header_search_box from "./search_box"
import Sign_in_box from "./sign_in";
import header from "./header.module.css"

export default function index() {
  return <div className={header.header}>
    {/* 로고를 띄웁니다 */}
    <a className={header.leftside} href="https://google.com">
        <img src="45logo_white.png" className={header.img}></img>
    </a>
    {/* header의 검색 박스와 회원가입 버튼을 띄웁니다. */}
    <div className={header.rightside}>
      <Header_search_box />
      <Sign_in_box />
    </div>
  </div>;
}
