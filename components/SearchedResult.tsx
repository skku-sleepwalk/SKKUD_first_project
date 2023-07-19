
import style from './SearchedResult.module.css'

let query = "프기실";
let ResultCnt = 5;

export default function SearchedResult() {
  return <div className={style.wrapper}>
    <h2 className={style.text}>
      "{query}" 검색
    </h2>
    <div className={style.cnt}>
      {ResultCnt}개 검색됨
    </div>
  </div>;
}