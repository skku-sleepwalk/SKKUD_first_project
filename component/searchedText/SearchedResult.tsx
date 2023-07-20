
import style from './SearchedResult.module.css'


export interface searchedTextProps {
  query: string;
  ResultCnt: number;
};
export function SearchedResult({ query, ResultCnt }: searchedTextProps) {
  return <div className={style.wrapper}>
    <h2 className={style.text}>
      "{query}" 검색
    </h2>
    <div className={style.cnt}>
      {ResultCnt}개 검색됨
    </div>
  </div>;
}