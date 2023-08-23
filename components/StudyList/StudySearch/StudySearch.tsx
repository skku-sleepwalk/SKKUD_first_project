import style from "./StudySearch.module.css";

export interface StudySearchProps {
  isSearch: boolean;
  keyword?: string | null;
  searchNum?: number | null;
}

export function StudySearch({
  isSearch,
  keyword,
  searchNum,
}: StudySearchProps) {
  return (
    <div className={style.searchContainer}>
      {isSearch ? (
        <div className={style.searchWrapper}>
          <div className={style.searchKeyword}>"{keyword}" 검색</div>
          <div className={style.searchResult}>{searchNum}개 검색됨</div>
        </div>
      ) : (
        <div className={style.searchKeyword}>
          Study with <img src="/images/45logoBlack.svg" className={style.img} />
        </div>
      )}
    </div>
  );
}
