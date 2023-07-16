// 이것의 화면을 보고 싶다면 http://localhost:3000/examplepage 로 들어가세요

import Header_search_box from "../component/search_box"
import Sign_in_box from "../component/sign_in";
import header from "../component/header.module.css"

export default function index() {
  return <div className={header.rightside}>
    <Header_search_box />
    <Sign_in_box />
  </div>;
  // <div className={header.header}>
  //   <div className={header.leftside}>
  //     <img src="45logo_white.png"></img>
  //   </div>
    
  // </div>;
    
}
