
import style from './SearchedResult.module.css'

let query = "프기실";
let ResultCnt = 3;

export default function SearchedResult() {
  return <div className={style.wrapper}>
    <h2>
      "{query}" 검색
    </h2>
    <div>
      {ResultCnt}개 검색됨
    </div>
  </div>;
}